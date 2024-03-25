
import React, { useState } from 'react';

export const useGenerateWhatsappUrl = () => {
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const generateWhatsappUrl = (phone) => {
    const queryParams = new URLSearchParams([
      ['phone', phone],
      ['type', 'phone_number'],
      ['app_absent', '0'],
    ]);
    const url = `https://api.whatsapp.com/send/?${queryParams.toString()}`;
    setWhatsappUrl(url);
  };

  return [whatsappUrl, generateWhatsappUrl];
};