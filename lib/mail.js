import nodemailer from 'nodemailer';

export async function sendSubmissionEmail(data) {
    const { name, email, companyName, phone, budget, message, enquiryType, subject } = data;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Recommended to send from auth user
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: subject || `New Contact Form Submission from ${name}`,
        text: `
            New Submission Received
            ---------------------------
            Name: ${name}
            Email: ${email}
            Enquiry Type: ${enquiryType || 'N/A'}
            Company: ${companyName || 'N/A'}
            Phone: ${phone || 'N/A'}
            Budget: ${budget || 'N/A'}

            Message:
            ${message}
        `,
        html: `
            <h2>New Submission Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Enquiry Type:</strong> ${enquiryType || 'N/A'}</p>
            <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: error.message };
    }
}
