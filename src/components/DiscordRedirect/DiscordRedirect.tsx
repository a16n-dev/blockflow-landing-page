'use client';
import { useEffect } from 'react';

const DiscordRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://discord.gg/CFfSXfyyHH';
  }, []);

  return null;
};

export default DiscordRedirect;
