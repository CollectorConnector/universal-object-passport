import QRCode from "qrcode";

export async function generateQR(data: string) {
  try {
    const qr = await QRCode.toDataURL(data, {
      margin: 1,
      width: 300,
      color: {
        dark: "#000000",
        light: "#ffffff"
      }
    });

    return qr;
  } catch (err) {
    console.error("QR generation failed:", err);
    return null;
  }
}
