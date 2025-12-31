export default function CardContent() {
  return (
    <>
      {/* Subtitle */}
      <p className="text-center text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
        Your subscription is about to expire...
      </p>

      {/* Question */}
      <h3 className="text-center text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
        Would you like to renew?
      </h3>

      {/* Features */}
      <p className="text-center text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
        Premium features include: unlimited hugs, daily laughs, and lifetime
        love
      </p>
    </>
  );
}
