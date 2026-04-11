
// GOOGLE_SHEET_API_URL: Link trích xuất từ Google Apps Script (Web App URL)
// Sau khi bạn triển khai Script, hãy dán link vào dấu nháy bên dưới.
export const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbwracuvUPRXOux4WtnlXXb-B52NxEUf0YgkADwEvmtS3KEr_c3wLLNhb85u-iNvML00/exec'; 

export interface AppCounts {
  [appTitle: string]: number;
}

/**
 * Lấy danh sách số lượt sử dụng từ Google Sheet
 */
export const fetchAppCounts = async (): Promise<AppCounts> => {
  if (!GOOGLE_SHEET_API_URL) return {};
  
  try {
    // Thêm timestamp để tránh bị trình duyệt cache kết quả cũ
    const response = await fetch(`${GOOGLE_SHEET_API_URL}?action=getCounts&t=${Date.now()}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Lỗi khi lấy số liệu thống kê:', error);
  }
  return {};
};

/**
 * Ghi nhận một lượt nhấp vào App
 */
export const trackAppVisit = async (appTitle: string) => {
  if (!GOOGLE_SHEET_API_URL) {
    console.warn('Vui lòng cấu hình GOOGLE_SHEET_API_URL trong services/tracking.ts');
    return;
  }

  try {
    // Sử dụng no-cors nếu gặp vấn đề về CORS, vì chúng ta chỉ cần gửi đi
    await fetch(`${GOOGLE_SHEET_API_URL}?name=${encodeURIComponent(appTitle)}`, {
      mode: 'no-cors'
    });
  } catch (error) {
    console.error('Lỗi khi ghi nhận thống kê:', error);
  }
};
