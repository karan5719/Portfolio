const API_URL = 'http://localhost:5000/api';

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export const saveMessage = async (data: Omit<Message, 'id' | 'created_at'>): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error saving message:', error);
    return false;
  }
};

export const getMessages = async (): Promise<Message[]> => {
  try {
    const response = await fetch(`${API_URL}/messages`);
    const result = await response.json();
    return result.success ? result.messages : [];
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
}; 