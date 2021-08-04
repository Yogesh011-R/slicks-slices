const nodemailer = require('nodemailer');

const generateOrderEmail = ({ order, total }) => {
  return `
  <div>
    <h2>Your Recent Order for ${total}</h2>
    <p>Please Start walking over, we will have your order ready in next 20 min</p>
    <ul>
    ${order.map(
      item => `
      <li>
        <img src="${item.thumbnail}" alt="${item.name}" />
        ${item.size} ${item.name} - ${item.price}
      </li>
      `
    )}
    </ul>
    <style>
    ul{
      list-style:none;
    }
    
    </style>
  </div>
  `;
};

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify(`Boop beep bop zzzzzstt good bye`),
    };
  }

  const requiresFields = ['email', 'name', 'order'];

  for (const field of requiresFields) {
    if (!body[field] && body.order.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify(`Oops! Your are missing the ${field} field `),
      };
    }
  }

  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify(`Why would you order nothing`),
    };
  }

  const info = await transporter.sendMail({
    from: "Slick's Slices <slick@example.com",
    to: `${body.name}  <${body.email}>`,
    subject: 'New Order',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
