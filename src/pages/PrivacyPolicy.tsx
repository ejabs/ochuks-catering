
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-orange max-w-none">
            <p>Last Updated: May 29, 2025</p>

            <h2>Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
              place orders, or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the site.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register on our site, place an order, subscribe to our 
              newsletter, respond to a survey, fill out a form, or otherwise contact us. This information may include:
            </p>
            <ul>
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Billing and shipping address</li>
              <li>Payment information (processed through secure third-party payment processors)</li>
              <li>Order preferences and customization requests</li>
              <li>Communication preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect from you to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders, products, or services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website, products, and services</li>
              <li>Administer promotions, surveys, or other site features</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may share your information with third parties only in the ways described in this privacy policy. 
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except:
            </p>
            <ul>
              <li>To trusted third parties who assist us in operating our website, conducting our business, or servicing you</li>
              <li>To comply with legal requirements, enforce our policies, or respond to a legal request</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your 
              browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>Security of Your Information</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information when you place an 
              order or enter, submit, or access your personal information. All payment information is encrypted through secure 
              socket layer technology (SSL).
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You can also object to processing of your 
              personal information, ask us to restrict processing, or request portability of your information. You can withdraw 
              consent for marketing communications at any time by clicking the "unsubscribe" link in any email.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through the information provided on our website.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
