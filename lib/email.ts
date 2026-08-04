import { Resend } from "resend";

const resend = new Resend('process.env.RESEND_API_KEY');

export async function sendApplicationEmail({
  to,
  jobTitle,
  candidateName,
}: {
  to: string;
  jobTitle: string;
  candidateName: string;
}) {
  try {
    await resend.emails.send({
      from: "RecruitIQ <notifications@yourdomain.com>",
      to,
      subject: `New application for ${jobTitle}`,
      html: `<p><strong>${candidateName}</strong> just applied for <strong>${jobTitle}</strong>.</p>
             <p>Log in to your RecruitIQ dashboard to review the application.</p>`,
    });
  } catch (error) {
    console.error("Failed to send application email:", error);
   
  }
}