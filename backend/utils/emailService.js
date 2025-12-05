const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendVotingNotification = async (email, userName) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '🗳️ Voting Has Begun! Cast Your Vote Now',
      html: `
        <h2>Hello ${userName}!</h2>
        <p>The election voting has started! 🎉</p>
        <p>You can now cast your vote for your preferred candidate.</p>
        <p><strong>Important:</strong> Each student can vote only once. Make sure your vote counts!</p>
        <a href="http://localhost:3000/voting" style="background-color: #33587A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          Go to Voting
        </a>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          If you didn't register yet, please do so before the voting ends.
        </p>
      `
    });
    console.log('Email sent successfully to:', email);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const sendVoteConfirmation = async (email, candidateName) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✅ Your Vote Has Been Recorded',
      html: `
        <h2>Your Vote is Secure!</h2>
        <p>Thank you for participating in the election.</p>
        <p><strong>Candidate Selected:</strong> ${candidateName}</p>
        <p>Your vote has been successfully recorded and encrypted in our secure database.</p>
        <p>You can view live results at any time on our platform.</p>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          This is an automated confirmation email. Please do not reply to this email.
        </p>
      `
    });
  } catch (error) {
    console.error('Error sending vote confirmation:', error);
  }
};

const sendElectionNotification = async (email, userName, electionTitle) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `📢 ${electionTitle} - Election Update`,
      html: `
        <h2>Election Announcement</h2>
        <p>Dear ${userName},</p>
        <p>A new election has been scheduled: <strong>${electionTitle}</strong></p>
        <p>Make sure to register and participate in this important democratic process.</p>
        <a href="http://localhost:3000/register" style="background-color: #33587A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          Register Now
        </a>
      `
    });
  } catch (error) {
    console.error('Error sending election notification:', error);
  }
};

module.exports = { sendVotingNotification, sendVoteConfirmation, sendElectionNotification };
