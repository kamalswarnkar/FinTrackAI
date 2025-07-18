const nodemailer = require('nodemailer');

// Create transporter with Gmail configuration from environment variables
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send welcome email to new newsletter subscribers
const sendWelcomeEmail = async (email) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: {
        name: process.env.EMAIL_FROM_NAME || 'FinTrackAI Team',
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: '🎉 Welcome to FinTrackAI Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="display: inline-block; width: 60px; height: 60px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 12px; margin-bottom: 20px; position: relative;">
                <span style="color: white; font-size: 24px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">📊</span>
              </div>
              <h1 style="color: #1f2937; margin: 0; font-size: 28px; font-weight: bold;">Welcome to FinTrackAI!</h1>
            </div>

            <!-- Main Content -->
            <div style="color: #374151; line-height: 1.6; margin-bottom: 30px;">
              <h2 style="color: #3b82f6; font-size: 20px; margin-bottom: 15px;">🚀 Thank you for subscribing!</h2>
              
              <p>Hi there!</p>
              
              <p>Welcome to the FinTrackAI community! We're thrilled to have you on board. You've just taken a smart step towards better financial management with AI-powered insights.</p>
              
              <h3 style="color: #1f2937; font-size: 18px; margin: 25px 0 15px 0;">📈 What you can expect from us:</h3>
              <ul style="padding-left: 20px;">
                <li style="margin-bottom: 8px;"><strong>Weekly Financial Tips:</strong> Expert advice to improve your financial health</li>
                <li style="margin-bottom: 8px;"><strong>Feature Updates:</strong> Be the first to know about new FinTrackAI features</li>
                <li style="margin-bottom: 8px;"><strong>Market Insights:</strong> AI-powered analysis of financial trends</li>
                <li style="margin-bottom: 8px;"><strong>Exclusive Content:</strong> Premium tips and strategies for our subscribers</li>
              </ul>
              
              <p style="margin-top: 25px;">We promise to keep your inbox valuable and never spam you. You can unsubscribe anytime with just one click.</p>
            </div>

            <!-- Call to Action -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="http://localhost:5176" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                🎯 Start Using FinTrackAI
              </a>
            </div>

            <!-- Footer -->
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
              <p style="margin: 0 0 10px 0;">Follow us for more updates:</p>
              <div style="margin: 15px 0;">
                <a href="#" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">Twitter</a>
                <a href="#" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">LinkedIn</a>
                <a href="#" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">GitHub</a>
              </div>
              <p style="margin: 20px 0 0 0;">
                © 2025 FinTrackAI. All rights reserved.<br>
                <a href="http://localhost:5176/privacy" style="color: #6b7280;">Privacy Policy</a> | 
                <a href="#" style="color: #6b7280;">Unsubscribe</a>
              </p>
            </div>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
};

// Send contact form notification email
const sendContactNotification = async (contactData) => {
  try {
    const { name, email, subject, message } = contactData;
    const transporter = createTransporter();
    
    const mailOptions = {
      from: {
        name: 'FinTrackAI Contact Form',
        address: process.env.EMAIL_USER
      },
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `📧 New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8fafc; padding: 30px; border-radius: 12px;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">📧 New Contact Form Submission</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #3b82f6; margin-bottom: 15px;">Contact Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #3b82f6; margin-bottom: 15px;">Message:</h3>
              <p style="line-height: 1.6; color: #374151;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>📅 Received:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('Error sending contact notification:', error);
    return { success: false, error: error.message };
  }
};

// Send confirmation email to contact form submitter
const sendContactConfirmation = async (email, name) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: {
        name: 'FinTrackAI Support',
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: '✅ We received your message - FinTrackAI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8fafc; padding: 30px; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="display: inline-block; width: 60px; height: 60px; background: linear-gradient(135deg, #10b981, #3b82f6); border-radius: 12px; margin-bottom: 20px; position: relative;">
                <span style="color: white; font-size: 24px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">✅</span>
              </div>
              <h1 style="color: #1f2937; margin: 0; font-size: 24px;">Message Received!</h1>
            </div>
            
            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
              <p style="color: #374151; margin-bottom: 15px;">Hi ${name},</p>
              <p style="color: #374151; line-height: 1.6;">
                Thank you for reaching out to FinTrackAI! We've received your message and our team will get back to you within 24 hours.
              </p>
              <p style="color: #374151; line-height: 1.6;">
                In the meantime, feel free to explore our platform and discover how AI can transform your financial management.
              </p>
            </div>
            
            <div style="text-align: center; margin: 25px 0;">
              <a href="http://localhost:5176" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 12px 25px; border-radius: 8px; font-weight: bold;">
                🚀 Explore FinTrackAI
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
              <p style="margin: 0;">Best regards,<br><strong>The FinTrackAI Team</strong></p>
            </div>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('Error sending contact confirmation:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendWelcomeEmail,
  sendContactNotification,
  sendContactConfirmation
};
