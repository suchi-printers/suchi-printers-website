import nodemailer from "nodemailer";
import { Enquiry } from "@/types";

export interface EmailResult {
  success: boolean;
  message: string;
}

export async function sendEnquiryEmailNotification(enquiry: Enquiry): Promise<EmailResult> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.NOTIFICATION_EMAIL || "suchiprinters@gmail.com";

  if (!host || !user || !pass) {
    return {
      success: false,
      message: "Email notification skipped: SMTP environment variables not configured.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const formattedDate = new Date(enquiry.timestamp).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #FAF6F0; border: 2px solid #A67C52; border-radius: 8px; overflow: hidden;">
        <div style="background: #141210; padding: 24px; text-align: center; border-bottom: 4px solid #E8A33D;">
          <h1 style="color: #F5EBDD; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Suchi Printers</h1>
          <p style="color: #E8A33D; margin: 6px 0 0; font-size: 14px; font-weight: bold;">New Packaging Quote Enquiry Received</p>
        </div>
        
        <div style="padding: 24px 28px;">
          <p style="font-size: 15px; color: #321D0D; margin-top: 0;">
            A new customer lead was submitted on the Suchi Printers website at <strong>${formattedDate}</strong>:
          </p>

          <table style="width: 100%; border-collapse: collapse; margin: 18px 0; background: #FFFFFF; border-radius: 6px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
            <tbody>
              <tr style="border-bottom: 1px solid #EBDAC3;">
                <td style="padding: 12px 16px; font-weight: bold; color: #6B4423; width: 35%;">Client Name</td>
                <td style="padding: 12px 16px; color: #141210; font-weight: bold;">${enquiry.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #EBDAC3;">
                <td style="padding: 12px 16px; font-weight: bold; color: #6B4423;">Phone Number</td>
                <td style="padding: 12px 16px; color: #141210;">
                  <a href="tel:${enquiry.phone}" style="color: #A67C52; font-weight: bold; text-decoration: none;">${enquiry.phone}</a>
                  &nbsp;|&nbsp;
                  <a href="https://wa.me/91${enquiry.phone}" target="_blank" style="color: #25D366; font-weight: bold; text-decoration: none;">Open WhatsApp</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #EBDAC3;">
                <td style="padding: 12px 16px; font-weight: bold; color: #6B4423;">Email</td>
                <td style="padding: 12px 16px; color: #141210;">${enquiry.email || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #EBDAC3;">
                <td style="padding: 12px 16px; font-weight: bold; color: #6B4423;">Company Name</td>
                <td style="padding: 12px 16px; color: #141210;">${enquiry.company || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #EBDAC3; background: #FFF9F2;">
                <td style="padding: 12px 16px; font-weight: bold; color: #E8A33D;">Product Required</td>
                <td style="padding: 12px 16px; color: #141210; font-weight: bold;">${enquiry.product}</td>
              </tr>
              <tr style="border-bottom: 1px solid #EBDAC3;">
                <td style="padding: 12px 16px; font-weight: bold; color: #6B4423;">Approx Quantity</td>
                <td style="padding: 12px 16px; color: #141210;">${enquiry.quantity || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #EBDAC3;">
                <td style="padding: 12px 16px; font-weight: bold; color: #6B4423;">Dimensions (L x W x H)</td>
                <td style="padding: 12px 16px; color: #141210;">${enquiry.size || "Standard / To be discussed"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: bold; color: #6B4423; vertical-align: top;">Client Message</td>
                <td style="padding: 12px 16px; color: #141210; white-space: pre-line;">${enquiry.message || "No additional comments"}</td>
              </tr>
            </tbody>
          </table>

          <div style="text-align: center; margin-top: 24px;">
            <a href="https://wa.me/91${enquiry.phone}?text=Hello%20${encodeURIComponent(enquiry.name)},%20thank%20you%20for%20contacting%20Suchi%20Printers%20regarding%20${encodeURIComponent(enquiry.product)}.%20We%20would%20be%20happy%20to%20share%20our%20bulk%20rates." 
               style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-right: 12px;">
              Reply on WhatsApp
            </a>
            <a href="tel:${enquiry.phone}" 
               style="display: inline-block; background: #E8A33D; color: #141210; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
              Call Customer Now
            </a>
          </div>
        </div>

        <div style="background: #EBDAC3; padding: 14px; text-align: center; font-size: 12px; color: #6B4423;">
          Suchi Printers — 123/385, Factory Area, Fazalganj, Kanpur – 208012 | Contact: 9415405306
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Suchi Printers Web" <${user}>`,
      to: recipient,
      subject: `📦 New Enquiry: ${enquiry.product} from ${enquiry.name} (${enquiry.company || enquiry.phone})`,
      html: htmlContent,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error: any) {
    console.error("Nodemailer error:", error?.message || error);
    return { success: false, message: error?.message || "Failed to send email" };
  }
}

