import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function RazorpayButton() {
  const formRef = useRef(null);

  useEffect(() => {
    // This ensures the script targets your form element after component mount
    if (formRef.current) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', 'pl_Q7F6jsV87VP7Bz');
      script.async = true;
      
      formRef.current.innerHTML = ''; // Clear any existing content
      formRef.current.appendChild(script);
    }
  }, []);

  return <form ref={formRef}></form>;
}