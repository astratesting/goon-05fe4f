export interface ThankYouEmailData {
  name: string;
  surveyUrl?: string;
}

export function generateThankYouEmail(data: ThankYouEmailData): string {
  const surveyUrl = data.surveyUrl || `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/survey`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You from Goon</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
    <tr>
      <td style="background:linear-gradient(135deg,#bae6fd 0%,#a7f3d0 50%,#fde68a 100%);padding:40px 32px;text-align:center;">
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;color:#1e293b;">Thank you, ${escapeHtml(data.name)}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:32px;">
        <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#475569;">
          We're so glad you took the time to connect with us. Your feedback helps us craft a better experience for everyone who discovers Goon.
        </p>
        <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#475569;">
          We have one small favor to ask — would you take 2 minutes to share your thoughts in our quick feedback survey? Your honest input shapes our next collection.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
          <tr>
            <td align="center">
              <a href="${surveyUrl}" style="display:inline-block;background:#1e293b;color:#ffffff;padding:14px 32px;border-radius:12px;text-decoration:none;font-size:15px;font-weight:600;">
                Take the Survey →
              </a>
            </td>
          </tr>
        </table>
        <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#94a3b8;">
          With gratitude,
        </p>
        <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#1e293b;font-weight:600;">
          The Goon Team
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 32px;border-top:1px solid #e2e8f0;text-align:center;">
        <p style="margin:0;font-size:12px;color:#94a3b8;">
          Goon · Handcrafted Trinkets with a Story<br>
          <a href="mailto:hello@goon.co" style="color:#475569;">hello@goon.co</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
