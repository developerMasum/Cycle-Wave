import { Check } from "lucide-react";

const OD_Success = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <div className="bg-green-100 rounded-full p-3">
        <Check className="h-14 w-14 text-green-600" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight">
        Thank you for your order!
      </h1>
      <p className="text-gray-500">
        Your order has been received and is being processed. We will contact you
        shortly.
      </p>
    </div>
  );
};

export default OD_Success;
