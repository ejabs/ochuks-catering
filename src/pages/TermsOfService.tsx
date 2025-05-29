
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-orange max-w-none">
            <p>Last Updated: May 29, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, 
              placing orders for products or services, you agree to be bound by these Terms. If you do not agree to these Terms, 
              please do not use our website or services.
            </p>

            <h2>2. Orders and Payment</h2>
            <p>
              By placing an order through our website, you are offering to purchase a product or service. All orders are subject 
              to acceptance by us. We may contact you to confirm details or decline an order for any reason.
            </p>
            <p>
              Payment for all orders must be made in advance through our secure payment system. We accept various payment methods 
              as indicated during the checkout process. All prices are stated in the local currency and include applicable taxes.
            </p>

            <h2>3. Delivery and Pickup</h2>
            <p>
              We offer delivery within designated areas for an additional fee. Delivery times are estimates and not guaranteed. 
              For same-day delivery, orders must be placed before the cutoff time specified on our website.
            </p>
            <p>
              For orders designated as pickup, items will be available at our location during the selected pickup time. Photo 
              identification may be required for pickup of certain orders.
            </p>

            <h2>4. Custom Orders and Cancellations</h2>
            <p>
              Custom orders require advance notice as specified in the product description. Designs and specifications for custom 
              orders must be finalized by the deadline communicated by our team.
            </p>
            <p>
              Cancellation of standard orders may be made with 48 hours' notice for a full refund. Custom orders may be cancelled 
              according to the following schedule:
            </p>
            <ul>
              <li>7+ days before pickup/delivery: Full refund less deposit</li>
              <li>3-6 days before pickup/delivery: 50% refund</li>
              <li>Less than 72 hours before pickup/delivery: No refund</li>
            </ul>

            <h2>5. Product Information and Allergies</h2>
            <p>
              We strive to provide accurate descriptions of our products. However, variations in appearance may occur, especially 
              for handmade items. All our products are prepared in facilities that handle common allergens. While we take 
              precautions, we cannot guarantee that any product is completely free of allergens.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Our liability for any claim arising from the provision of our products or services is limited to the amount paid 
              for the specific order giving rise to the claim. We are not liable for any indirect, consequential, or incidental 
              damages.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and images, is our property and protected by copyright 
              and other intellectual property laws. You may not use, reproduce, or distribute our content without our written 
              permission.
            </p>

            <h2>8. Disputes and Governing Law</h2>
            <p>
              These Terms are governed by the laws of [Your Jurisdiction]. Any dispute arising from these Terms shall be resolved 
              through good faith negotiation. If negotiation fails, the dispute shall be submitted to binding arbitration in 
              accordance with the rules of [Relevant Arbitration Association].
            </p>

            <h2>9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our 
              website. Your continued use of our website or services after changes are posted constitutes acceptance of the 
              modified Terms.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us through the information provided on our website.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
