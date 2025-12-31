export default function CardContent() {
  return (
    <>
      {/* Subtitle */}
      <p className="text-center text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
        Your subscription is about to expire...
      </p>

      {/* Question */}
      <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Would you like to renew?
      </h3>

      {/* Features */}
      <p className="text-center text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
        Premium features include: unlimited hugs, daily laughs, and lifetime
        love
      </p>
    </>
  );
}
