import { NextResponse } from 'next/server';

import { supabaseAdmin } from '@/lib/supabase/admin';
import { formSchema } from '@/app/schema/formSchema';

export async function POST(request: Request) {
  try {
    // 1. Read incoming request
    const body = await request.json();

    // 2. Validate incoming payload
    const validation = formSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form submission',
          errors: validation.error.flatten(),
        },
        { status: 400 },
      );
    }

    // 3. Use validated data only
    const data = validation.data;

    // 4. Plan prices
    const planPrices = {
      monthly: {
        arcade: 9,
        advanced: 12,
        pro: 15,
      },
      yearly: {
        arcade: 90,
        advanced: 120,
        pro: 150,
      },
    };

    // 5. Add-on prices
    const addonPrices = {
      monthly: {
        onlineService: 1,
        largeStorage: 2,
      },
      yearly: {
        onlineService: 10,
        largeStorage: 20,
      },
    };

    // 6. Calculate total amount on the server
    const totalAmount =
      planPrices[data.option][data.plan] +
      (data.addOn.onlineService ? addonPrices[data.option].onlineService : 0) +
      (data.addOn.largeStorage ? addonPrices[data.option].largeStorage : 0);

    // 7. Insert validated and calculated data into Supabase
    const { error } = await supabaseAdmin.from('form_submissions').insert({
      name: data.name,
      email: data.email,
      phone_no: data.phoneNo,
      plan: data.plan,
      billing_option: data.option,
      add_ons: data.addOn,
      total_amount: totalAmount,
    });

    if (error) {
      console.error('Supabase insertion error:', error);

      return NextResponse.json(
        {
          success: false,
          message: 'Failed to save submission',
        },
        { status: 500 },
      );
    }

    // 8. Return successful response
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Submission error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong',
      },
      { status: 500 },
    );
  }
}
