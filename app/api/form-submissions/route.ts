import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase/admin';

const submissionSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phoneNo: z.string().trim().min(7).max(30),
  plan: z.enum(['arcade', 'advanced', 'pro']),
  option: z.enum(['monthly', 'yearly']),
  addOn: z.object({
    onlineService: z.boolean(),
    largeStorage: z.boolean(),
    customizable: z.boolean(),
  }),
  totalAmount: z.number().finite().nonnegative(),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = submissionSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ message: 'Invalid form data.' }, { status: 400 });
    }

    const data = result.data;

    const { error } = await supabaseAdmin.from('form_submissions').insert({
      name: data.name,
      email: data.email,
      phone_no: data.phoneNo,
      plan: data.plan,
      billing_option: data.option,
      add_ons: data.addOn,
      total_amount: data.totalAmount,
    });

    if (error) {
      console.error('Submission insert failed:', error.message);

      return NextResponse.json({ message: 'Unable to save your submission.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Form submitted successfully.' }, { status: 201 });
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }
}
