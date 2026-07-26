
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

/**
 * Lấy trạng thái hiển thị nút Bảng Giá.
 * Đọc từ getCounts (Sheet1 hiện có) — key đặc biệt "__pricing_visible__"
 * Giá trị 0 = ẩn, 1 hoặc không có = hiện
 */
export const fetchPricingVisibility = async (): Promise<boolean> => {
  if (!GOOGLE_SHEET_API_URL) return true;
  try {
    const response = await fetch(
      `${GOOGLE_SHEET_API_URL}?action=getCounts&t=${Date.now()}`
    );
    if (response.ok) {
      const counts = await response.json();
      // Nếu key tồn tại và = 0 thì ẩn, ngược lại hiện
      if ('__pricing_visible__' in counts) {
        return counts['__pricing_visible__'] !== 0;
      }
    }
  } catch (error) {
    console.error('Lỗi khi lấy trạng thái pricing:', error);
  }
  return true; // mặc định hiện
};

/**
 * Lưu trạng thái hiển thị nút Bảng Giá lên Sheet1 hiện có.
 * Gọi action=setValue để SET giá trị (không cộng dồn).
 */
export const savePricingVisibility = async (visible: boolean): Promise<void> => {
  if (!GOOGLE_SHEET_API_URL) return;
  try {
    await fetch(
      `${GOOGLE_SHEET_API_URL}?action=setValue&key=__pricing_visible__&value=${visible ? 1 : 0}`
    );
  } catch (error) {
    console.error('Lỗi khi lưu trạng thái pricing:', error);
  }
};

/**
 * Lấy nội dung thông báo từ Google Sheet (ô E1).
 */
export const fetchNotification = async (): Promise<string> => {
  if (!GOOGLE_SHEET_API_URL) return "";
  try {
    const response = await fetch(`${GOOGLE_SHEET_API_URL}?action=getNotification&t=${Date.now()}`);
    if (response.ok) {
      const data = await response.json();
      return data.text || "";
    }
  } catch (error) {
    console.error('Lỗi khi lấy thông báo:', error);
  }
  return "";
};
