"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Mail, Server, Database, User, Monitor } from 'lucide-react';
import ContactForm from "@/components/ContactForm";
import Image from 'next/image';

export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      
      <ContactForm />

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="w-6 h-6" />
            How Does This Work?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            When you submit a message, it is sent to our backend system, which processes, stores it securely, and notifies me immediately. Here is a breakdown of our architecture:
          </p>
          <div className="flex justify-center mb-6 bg-white p-4 rounded-lg shadow-inner">
            <Image 
              src="/mermaid.svg"
              alt="Architecture diagram showing the flow from user submission through the system"
              width={600}
              height={300}
              className="w-full"
            />
          </div>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-blue-500" />
              <strong>Frontend:</strong> Built with Next.js hosted on Vercel.
            </li>
            <li className="flex items-center gap-2">
              <Server className="w-5 h-5 text-red-500" />
              <strong>Backend:</strong> Powered by Ruby on Rails, hosted on Render as a backend service only.
            </li>
            <li className="flex items-center gap-2">
              <Database className="w-5 h-5 text-green-500" />
              <strong>Database:</strong> Utilizing Postgres on Supabase for notifications.
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-500" />
              <strong>Notification:</strong> A Rails mailer sends me an immediate email notification when you submit a message.
            </li>
            <li className="flex items-center gap-2">
              <User className="w-5 h-5 text-orange-500" />
              <strong>Response:</strong> This system ensures I can respond to your inquiries promptly.
            </li>
          </ul>
        </CardContent>
      </Card>
    </article>
  );
}