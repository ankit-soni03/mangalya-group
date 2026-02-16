"use client";

export default function PrivacyPolicy() {
  const policyData = [
    {
      title: "What This Privacy Policy Covers",
      content: [
        "This Privacy Policy outlines our use of personally identifiable information that is shared by you on our site.",
        "It also covers the treatment of personally identifiable information shared with us. This policy applies to personally identifiable information collected through any app or website we own or operate.",
        "It does not apply to organizations not owned or controlled by us, nor to people who are not employed or managed by us. Additionally, it does not cover information required to be shared with public or private authorities as per applicable laws, court orders, or directions.",
      ],
    },
    {
      title: "Information Collection and Use",
      content: [
        "We use your personal information solely to provide and improve our services. By using the site, you consent to the collection and use of information as described in this Privacy Policy.",
        "We collect personally identifiable information when you submit an inquiry form on our website or chat with our apps.",
        "While using our website, we may ask for certain personally identifiable details that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, phone number, email address, and other details pertaining to being contacted, overseeing the DNC/NOHC.",
        "When submitting a form, we may request your name, email address, and phone number. You have the option not to submit this information. Once submitted, this information is stored securely in our database and is not shared with third parties.",
        "We maintain a policy to respond to your queries, maintain records for future reference, and communicate with you about our products and services. Like many operators, we collect log data, which may include information such as your device's Internet Protocol address, browser type, pages visited, time and date of visit, and other statistics.",
        "We also collect technical details, including device information, location data, and network carrier details when you use our mobile apps.",
      ],
    },
    {
      title: "The Information We Collect",
      bulletPoints: [
        {
          title: "Personal Information",
          content: "Name, gender, age, images, contact details (postal address, telephone numbers, email id), nationality, and other content.",
        },
        {
          title: "Interactions with us",
          content: "Records of any interactions with our team or any assistance given or references to us on social media.",
        },
        {
          title: "Survey Responses",
          content: "Information collected from customer surveys conducted by us or on our behalf.",
        },
        {
          title: "Website, App, and Social Media Usage",
          content: "Details of your visits to our website, interactions with our social media pages, and mobile app usage. This includes tracking technology such as cookies.",
        },
        {
          title: "Online Identifiers",
          content: "Mobile device advertising identifiers and geo-location data when using any Mangalya Group mobile application.",
        },
        {
          title: "Location Data",
          content: "Collected during the registration process on our apps to provide location-specific services.",
        },
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      bulletPoints: [
        {
          title: "We do not sell, rent, or share personally identifiable information with third parties",
          content: "",
        },
        {
          title: "Except with your explicit consent",
          content: "",
        },
        {
          title: "When we have your explicit consent",
          content: "",
        },
        {
          title: "If required by law or in good faith belief that such disclosure is necessary to",
          content: "Comply with legal obligations, enforce agreements, or respond to law enforcement requests.",
        },
        {
          title: "To enforce our Privacy Policy or Terms of Service",
          content: "",
        },
        {
          title: "To respond to claims that content on our website violates the rights of third parties",
          content: "",
        },
        {
          title: "To protect the rights, property, or personal safety of our users or the general public",
          content: "",
        },
      ],
    },
    {
      title: "Intellectual Property and Restrictions on Use",
      bulletPoints: [
        {
          title: "The content and design of this website are the exclusive property of Mangalya Group",
          content: "No person may, without our explicit consent, reproduce, or allow others to use or reproduce any content and design of the website or content in any way.",
        },
        {
          title: "The retrieval and display of website content for personal, commercial, or non-commercial purposes, as well as any modification or commercial use of the content, are strictly prohibited",
          content: "Unauthorized use of website content is prohibited and may result in legal action.",
        },
      ],
    },
    {
      title: "Policy Updates",
      bulletPoints: [
        {
          title: "This Privacy Policy is subject to change, and any modifications will be communicated on this page",
          content: "",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Privacy Policy
          </h1>

          {/* Introduction */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-10 mb-16">
            <p className="text-gray-700 text-base leading-relaxed">
              Mangalya Group is committed to maintaining the privacy and accuracy of the information provided on this site. All information is shared with the complete knowledge of the owner, and appropriate measures have been taken to ensure that users' credentials are not misused, accidentally destroyed, or lost within the environment of Mangalya Group. While care has been taken in the production of information on this website, Mangalya Group does not accept any liability for any errors or omissions in the information contained herein.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-white px-6 md:px-12 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {policyData.map((section, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Section Title */}
              <div className="md:col-span-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 sticky top-20">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div className="md:col-span-2">
                {section.bulletPoints ? (
                  // Bullet points format
                  <ul className="space-y-4">
                    {section.bulletPoints.map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="text-[#16a34a] font-bold text-lg flex-shrink-0 mt-0.5">
                          •
                        </span>
                        <div>
                          <p className="text-gray-900 font-semibold text-base">
                            {item.title}
                          </p>
                          {item.content && (
                            <p className="text-gray-700 text-base leading-relaxed mt-1">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Paragraphs format
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Professional Sections */}
      <div className="bg-gray-50 px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Data Security */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 sticky top-20">
                Data Security
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We take the security of your personal information seriously. We have implemented appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* User Rights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 sticky top-20">
                Your Rights
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information at any time by contacting us. You may also opt-out of receiving communications from us by following the unsubscribe instructions in any email we send.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                If you have any questions about your personal information or this Privacy Policy, please contact us at:
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-900 font-semibold mb-3">Contact Information:</p>
                <p className="text-gray-700 text-sm mb-2">
                  <span className="font-medium">Email:</span> info@mangalayagroup.in
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <span className="font-medium">Phone:</span> +91 8273782839
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Address:</span> H-97, Sector 63, Noida, 20122
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Policy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 sticky top-20">
                Cookies & Tracking
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and provide personalized content.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                You can control cookie preferences through your browser settings. However, disabling cookies may affect the functionality of our website. We do not use cookies for marketing purposes without your explicit consent.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 sticky top-20">
                External Links
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Our website may contain links to external websites and third-party services. We are not responsible for the privacy practices or content of these external websites. We encourage you to review the privacy policies of any third-party websites before providing your personal information.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Your use of third-party websites is subject to their terms and privacy policies, not ours. We recommend that you read and understand their policies before interacting with them.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 sticky top-20">
                Children's Privacy
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information and terminate the child's account.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                If you believe a child under 13 has provided us with personal information, please contact us immediately at the contact information provided above.
              </p>
            </div>
          </div>

          {/* International Data */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 sticky top-20">
                International Data Transfer
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our services, you consent to the transfer of your information to countries outside your country of residence.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                We ensure that such transfers are conducted in compliance with applicable data protection laws and that appropriate safeguards are in place to protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-white px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-6xl mx-auto border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm text-center mb-4">
            <span className="font-semibold">Last Updated:</span> {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-500 text-xs text-center">
            This Privacy Policy is effective immediately and remains in effect unless and until we notify you of changes to this policy.
          </p>
        </div>
      </div>
    </div>
  );
}