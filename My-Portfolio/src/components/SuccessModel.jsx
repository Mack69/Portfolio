import { motion, AnimatePresence, delay } from "framer-motion";
import { CheckCircle, X , Sparkles} from "lucide-react";

const SuccessModal = ({ submitted, setSubmitted, isDarkMode }) => {
  return (
    <AnimatePresence>
      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          onClick={() => setSubmitted(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative p-8 rounded-2xl border max-w-sm w-full text-center ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle
              size={48}
              className="mx-auto mb-4 text-green-500"
              strokeWidth={1.5}
              
            />
            <div
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Message Sent!
            </div>
            <div
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Thank you for reaching out. I’ll get back to you soon.
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 p-1 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-400"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.div 
              className="flex justify-center">
                <Sparkles size={22} className="text-yellow-400"/>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
