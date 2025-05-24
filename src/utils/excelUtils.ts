import * as XLSX from 'xlsx';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const SHEET_NAME = 'Contact Form Submissions';
const FILE_NAME = 'contact_submissions.xlsx';
const STORAGE_KEY = 'contact_form_data';

export const saveSubmission = (formData: Omit<ContactFormData, 'timestamp'>) => {
  try {
    let existingData: ContactFormData[] = [];

    // Add timestamp to the new submission
    const newSubmission: ContactFormData = {
      ...formData,
      timestamp: new Date().toLocaleString()
    };

    try {
      // Try to get existing data from localStorage
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        existingData = JSON.parse(storedData);
      }
    } catch (error) {
      console.log('No existing data found in localStorage');
    }

    // Combine existing data with new submission
    const allData = [...existingData, newSubmission];

    // Save updated data to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));

    return true;
  } catch (error) {
    console.error('Error saving submission:', error);
    return false;
  }
};

export const downloadAllSubmissions = () => {
  try {
    // Initialize workbook
    const workbook = XLSX.utils.book_new();
    let allData: ContactFormData[] = [];

    // Get all submissions from localStorage
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        allData = JSON.parse(storedData);
      }
    } catch (error) {
      console.log('No existing data found in localStorage');
      return false;
    }

    if (allData.length === 0) {
      console.log('No submissions to download');
      return false;
    }

    // Create worksheet with all data
    const worksheet = XLSX.utils.json_to_sheet(allData, {
      header: ['name', 'email', 'message', 'timestamp']
    });

    // Auto-size columns
    const max_width = 50;
    const colWidths: Record<keyof ContactFormData, number> = {
      name: 0,
      email: 0,
      message: 0,
      timestamp: 0
    };

    allData.forEach((row: ContactFormData) => {
      (Object.keys(row) as Array<keyof ContactFormData>).forEach(key => {
        const value = String(row[key]);
        colWidths[key] = Math.min(
          max_width,
          Math.max(colWidths[key] || 0, value.length)
        );
      });
    });

    worksheet['!cols'] = (Object.keys(colWidths) as Array<keyof ContactFormData>).map(key => ({
      wch: colWidths[key]
    }));

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, SHEET_NAME);

    // Generate and download the file with all submissions
    XLSX.writeFile(workbook, FILE_NAME);

    return true;
  } catch (error) {
    console.error('Error downloading submissions:', error);
    return false;
  }
};

export const readExcelFile = async (file: File): Promise<ContactFormData[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[SHEET_NAME];
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as ContactFormData[];
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
}; 