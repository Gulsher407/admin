import React, { useState, useEffect } from 'react';

function ServicesList() {

  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockServices = [
        { id: 1, Title: 'Front-end Development', Category: 'Front-end', Description: 'HTML, CSS, JS, ReactJS', Charges: '$5/Hr' },
        { id: 2, Title: 'Back-end Development', Category: 'Back-end', Description: 'Node.js, Express, MongoDB', Charges: '$10/Hr' },
        { id: 3, Title: 'UI/UX Design', Category: 'Design', Description: 'UI/UX Design, Figma, Sketch', Charges: '$8/Hr' },
        { id: 4, Title: 'Mobile App Development', Category: 'Mobile Development', Description: 'React Native, Swift, Kotlin', Charges: '$12/Hr' },
        { id: 5, Title: 'SEO Optimization', Category: 'SEO', Description: 'Keyword Research, On-page SEO', Charges: '$6/Hr' },
        { id: 6, Title: 'Content Writing', Category: 'Content Writing', Description: 'Blog Writing, Copywriting', Charges: '$7/Hr' },
        { id: 7, Title: 'Graphic Design', Category: 'Graphic Design', Description: 'Photoshop, Illustrator', Charges: '$9/Hr' },
        { id: 8, Title: 'Video Editing', Category: 'Video Editing', Description: 'Premiere Pro, After Effects', Charges: '$11/Hr' },
        { id: 9, Title: 'Digital Marketing', Category: 'Digital Marketing', Description: 'Social Media Marketing, PPC', Charges: '$8/Hr' },
        { id: 10, Title: 'E-commerce Development', Category: 'E-commerce Development', Description: 'Shopify, WooCommerce', Charges: '$15/Hr' },
        { id: 11, Title: 'Data Entry Services', Category: 'Data Entry', Description: 'Data Processing, Data Cleansing', Charges: '$4/Hr' },
        { id: 12, Title: 'Virtual Assistance', Category: 'Virtual Assistance', Description: 'Administrative Tasks, Email Management', Charges: '$6/Hr' },
        { id: 13, Title: 'Illustration Services', Category: 'Illustration', Description: 'Digital Art, Character Design', Charges: '$10/Hr' },
        { id: 14, Title: 'Translation Services', Category: 'Translation', Description: 'English-Spanish Translation', Charges: '$8/Hr' },
        { id: 15, Title: 'Voiceover Services', Category: 'Voiceover', Description: 'Narration, Voice Acting', Charges: '$9/Hr' },
        { id: 16, Title: 'Photography Services', Category: 'Photography', Description: 'Product Photography, Portrait Photography', Charges: '$12/Hr' },
        { id: 17, Title: 'Transcription Services', Category: 'Transcription', Description: 'Audio Transcription, Video Transcription', Charges: '$6/Hr' },
        { id: 18, Title: 'Animation Services', Category: 'Animation', Description: '2D Animation, Motion Graphics', Charges: '$10/Hr' },
        { id: 19, Title: 'Consulting Services', Category: 'Consulting', Description: 'Business Consulting, Financial Consulting', Charges: '$15/Hr' },
        { id: 20, Title: 'Training Services', Category: 'Training', Description: 'Online Tutoring, Skill Development', Charges: '$8/Hr' }
      ];
      setServices(mockServices);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto'>
        <h2 className="text-3xl font-bold mb-4 text-right p-4">Services List</h2>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="text-gray-500 mr-4 text-3xl">Loading</div>
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-green-500 h-16 w-16 animate-spin"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-2 border-slate-200 mb-4">
              <thead>
                <tr className='bg-[#00008B] text-white'>
                  <th className="px-4 py-2 sm:w-1/4 lg:w-1/6 text-left">Service Title</th>
                  <th className="px-4 py-2 sm:w-1/4 lg:w-1/6 text-left">Service Category</th>
                  <th className="px-4 py-2 sm:w-1/2 lg:w-1/3 text-left">Service Description</th>
                  <th className="px-4 py-2 sm:w-1/4 lg:w-1/6 text-left">Service Charges</th>
                </tr>
              </thead>
              <tbody>
                {services.map(service => (
                  <tr key={service.id} className='bg-white'>
                    <td className="px-4 py-2 sm:w-1/4 lg:w-1/6">{service.Title}</td>
                    <td className="px-4 py-2 sm:w-1/4 lg:w-1/6">{service.Category}</td>
                    <td className="px-4 py-2 sm:w-1/2 lg:w-1/3">{service.Description}</td>
                    <td className="px-4 py-2 sm:w-1/4 lg:w-1/6">{service.Charges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesList;
