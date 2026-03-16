export default function WhatsAppButton() {

  const phoneNumber = "917358914490"

  const message = "Hello leaf art, I would like to know more about your leaf art gifting services."

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src="/whtsapp.png"
        alt="WhatsApp"
        className="w-14 h-14 hover:scale-110 transition animate-bounce"
      />
    </a>
  )
}