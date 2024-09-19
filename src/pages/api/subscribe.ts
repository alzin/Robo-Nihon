// src/pages/api/subscribe.ts

import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/client";

type Data = {
  message: string;
};

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    // Return 405 Method Not Allowed if not POST
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "無効なメールアドレスです。" });
  }

  try {
    // Add the email to SendGrid contacts
    const request = {
      url: "/v3/marketing/contacts",
      method: "PUT" as const,
      body: {
        contacts: [
          {
            email: email,
          },
        ],
      },
    };

    await sendgrid.request(request);

    // Return success message
    return res.status(200).json({ message: "ニュースレターに登録しました！" });
  } catch (error) {
    console.error("Error subscribing email:", error);
    return res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
}
