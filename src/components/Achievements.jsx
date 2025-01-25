import React from 'react';
import PageTransition from './common/PageTransition';
import BadgeSection from './common/BadgeSection';
import { getAssetPath } from '../utils/assetHelpers';

const Achievements = () => {
  const certifications = {
    aws_ml_ai: [
      {
        title: "AWS Machine Learning Foundations",
        image: "https://images.credly.com/size/220x220/images/4b68a030-53d0-414b-be57-b1837bc3b3e6/image.png",
        link: "https://www.credly.com/badges/f950c294-8a85-4f7e-b5f5-b27f49e69782/public_url",
        alt: "AWS ML Foundations"
      },
      {
        title: "AWS DeepRacer",
        image: "https://images.credly.com/size/220x220/images/51984979-f759-49f0-8bb3-5310d364fdbe/image.png",
        link: "https://www.credly.com/badges/df8711ea-0ca0-45b4-aed8-4ac2fa8a6a6a/public_url",
        alt: "AWS DeepRacer"
      }
    ],
    aws_cloud: [
      {
        title: "AWS Cloud Quest Cloud Practitioner",
        image: "https://images.credly.com/size/220x220/images/629a2bb9-14a6-47b3-b17e-f1056b1404d0/image.png",
        link: "https://www.credly.com/badges/8bb69d6f-dd05-4f4c-9323-134bcf5b1dd0/public_url",
        alt: "AWS Cloud Quest"
      },
      {
        title: "AWS Knowledge: Cloud Essentials",
        image: "https://images.credly.com/size/220x220/images/9358115e-ead7-47c2-91e2-165b6a650a1b/image.png",
        link: "https://www.credly.com/badges/a141f260-a0dd-4573-aaab-c2ba61da5e95/public_url",
        alt: "AWS Cloud Essentials"
      },
      {
        title: "AWS Knowledge: Object Storage",
        image: "https://images.credly.com/size/220x220/images/01c3b0d4-a225-483b-a762-460473658c1a/image.png",
        link: "https://www.credly.com/badges/e18054dd-1301-4724-a4fc-b63b4087c60d/public_url",
        alt: "AWS Object Storage"
      },
      {
        title: "AWS Knowledge: Compute",
        image: "https://images.credly.com/size/220x220/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png",
        link: "https://www.credly.com/badges/6a622380-3843-4d00-a0af-5242028c7396/public_url",
        alt: "AWS Compute"
      }
    ],
    professional_certs: [
      {
        id: 'ds-cert',
        title: 'Data Science with Python Bootcamp Certificate',
        description: 'Comprehensive certification in modern web development technologies including Node.js, Express, MongoDB, and cloud infrastructure.',
        pdfPath: getAssetPath('/assets/pdf/DSA.pdf')
      },
      {
        id: 'react-cert',
        title: 'React Bootcamp Certificate',
        description: 'Advanced certification in backend development focusing on scalable architectures, API design, and database optimization.',
        pdfPath: getAssetPath('/assets/pdf/React.pdf')
      },
      {
        id: 'node-cert',
        title: 'Backend Development Specialization',
        description: 'Advanced certification in backend development focusing on scalable architectures, API design, and database optimization.',
        pdfPath: getAssetPath('/assets/pdf/Node.pdf')
      },
      {
        id: 'sql-cert',
        title: 'Backend Development Specialization',
        description: 'Advanced certification in backend development focusing on scalable architectures, API design, and database optimization.',
        pdfPath: getAssetPath('/assets/pdf/Sql.pdf')
      }
    ]
  };

  // Update the PDF viewer component
  const PDFViewer = ({ pdfPath }) => {
    return (
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <object
          data={pdfPath}
          type="application/pdf"
          className="w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          <p>Your browser does not support PDFs. 
            <a 
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 ml-1"
            >
              Download the PDF
            </a>
          </p>
        </object>
      </div>
    );
  };

  return (
    <PageTransition>
      <div name="achievements" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Certifications & Achievements
            </p>
            <p className="py-6">My AWS certifications and technical accomplishments</p>
          </div>

          {/* AWS ML & AI Certifications */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6">Machine Learning & AI</h3>
            <BadgeSection 
              title="AWS Machine Learning Certifications" 
              badges={certifications.aws_ml_ai} 
            />
          </div>

          {/* AWS Cloud Certifications */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6">Cloud Computing</h3>
            <BadgeSection 
              title="AWS Cloud Certifications" 
              badges={certifications.aws_cloud} 
            />
          </div>

          {/* Professional Certificates Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6">Professional Certificates</h3>
            <div className="space-y-8">
              {certifications.professional_certs.map((cert) => (
                <div key={cert.id} className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* PDF Preview - Left Side */}
                    <div className="w-full md:w-1/2">
                      <PDFViewer pdfPath={cert.pdfPath} />
                    </div>

                    {/* Certificate Details - Right Side */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <h4 className="text-xl font-semibold text-blue-400 mb-4">
                        {cert.title}
                      </h4>
                      <p className="text-gray-300">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Achievements; 