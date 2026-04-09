import { Resend } from "resend";
import type { LeadFormData } from "./validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadNotification(lead: LeadFormData) {
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!to || !from || !process.env.RESEND_API_KEY) {
    console.warn("Email config missing — skipping notification");
    return;
  }

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0B1D33; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #C9A96E; margin: 0; font-size: 20px;">🏠 New Lead — Iterum Homes</h1>
        <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">From the website lead form</p>
      </div>
      <div style="background: white; padding: 24px; border: 1px solid #E2DDD5; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #5A6B7F; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(lead.name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #5A6B7F;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(lead.phone)}" style="color: #0B1D33;">${escapeHtml(lead.phone)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #5A6B7F;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(lead.email)}" style="color: #0B1D33;">${escapeHtml(lead.email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #5A6B7F;">Address</td><td style="padding: 8px 0;">${escapeHtml(lead.propertyAddress)}</td></tr>
        </table>
        <p style="margin: 24px 0 0; color: #8A96A5; font-size: 12px;">Received ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT</p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: `Iterum Homes Leads <${from}>`,
      to,
      subject: `New Lead: ${lead.name} — ${lead.propertyAddress}`,
      html,
      replyTo: lead.email,
    });
  } catch (err) {
    console.error("Failed to send lead notification:", err);
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
