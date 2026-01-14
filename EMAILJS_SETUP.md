# EmailJS Setup Instructions

To enable email sending from the contact form to info@automatizacijas.lv, follow these steps:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (info@automatizacijas.lv)
5. Note down the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}} ({{from_email}})
Company: {{company}}
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

---
This email was sent from the Baltai website contact form.
Reply-To: {{reply_to}}
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abc123def456`)

## 5. Configure Environment Variables

1. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials

## 6. Test the Form

1. Start the development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check info@automatizacijas.lv for the email

## Email Template Variables

The form sends these variables to the email template:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{company}}` - Customer's company (optional)
- `{{phone}}` - Customer's phone (optional)
- `{{service}}` - Selected service
- `{{message}}` - Customer's message
- `{{reply_to}}` - Customer's email for replies

## Troubleshooting

- Check browser console for any EmailJS errors
- Verify all credentials are correct
- Ensure Gmail account is properly connected
- Check spam folder if emails don't arrive
- EmailJS free plan allows 200 emails/month