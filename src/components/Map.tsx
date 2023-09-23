import React from 'react';

const Map = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2558295706745!2d72.80606617485292!3d21.181993782498722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e771bf220d9%3A0xbdd1676277c8bb1!2sSarvajanik%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1695380432072!5m2!1sen!2sin"
        style={{ border: 0, filter: 'invert(90%)' }}
        allowFullScreen
        loading="lazy"
        className="w-full h-[40vh]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
