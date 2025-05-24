import * as XLSX from 'xlsx';
import { readFileSync, existsSync, writeFileSync } from 'fs';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const EXCEL_FILE = 'contact_submissions.xlsx';
const SHEET_NAME = 'Contact Form Submissions';

export const saveToExcel = (formData: Omit<ContactFormData, 'timestamp'>) => {
  try {
    let workbook: XLSX.WorkBook;
    let worksheet: XLSX.WorkSheet;
    
    // Add timestamp to the data
    const submissionData: ContactFormData = {
      ...formData,
      timestamp: new Date().toLocaleString()
    };

    // Check if file exists
    if (existsSync(EXCEL_FILE)) {
      // Read existing file
      const fileData = readFileSync(EXCEL_FILE);
      workbook = XLSX.read(fileData);
      worksheet = workbook.Sheets[SHEET_NAME];
    } else {
      // Create new workbook
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.json_to_sheet([]);
      XLSX.utils.book_append_sheet(workbook, worksheet, SHEET_NAME);
    }

    // Convert worksheet to JSON to append new data
    const jsonData = (worksheet ? XLSX.utils.sheet_to_json(worksheet) : []) as ContactFormData[];
    jsonData.push(submissionData);

    // Convert back to worksheet with headers
    worksheet = XLSX.utils.json_to_sheet(jsonData, {
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

    jsonData.forEach((row: ContactFormData) => {
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

    workbook.Sheets[SHEET_NAME] = worksheet;

    // Write to file
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    writeFileSync(EXCEL_FILE, excelBuffer);

    return true;
  } catch (error) {
    console.error('Error saving to Excel:', error);
    return false;
  }
}; 