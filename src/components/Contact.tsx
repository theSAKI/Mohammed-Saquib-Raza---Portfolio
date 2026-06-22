import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Github, Linkedin, Copy, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);
    setFormError(false);
    setFormSuccess(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/saquibraza5683@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      if (response.ok) {
        setFormSuccess(true);
        // Reset fields
        setName('');
        setEmail('');
        setMessage('');

        // Cool timeout to dismiss the success status alert
        setTimeout(() => {
          setFormSuccess(false);
        }, 6000);
      } else {
        setFormError(true);
      }
    } catch (err) {
      console.error('Error submitting form to FormSubmit', err);
      setFormError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent">
      <div className="absolute inset-0 bg-grid-cyber mask-radial -z-10 bg-cyber-dark opacity-35" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-2 font-bold animate-pulse">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white uppercase" id="contact-heading">
            Connect & Start a Conversation
          </h2>
          <div className="w-16 h-1 bg-[#22D3EE] mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm mt-5 leading-relaxed font-sans">
            Have a project description, an active opening, or query? Feel free to write me directly or utilize the custom contact console below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column Information */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="contact-info">
            <h3 className="font-display font-semibold text-lg text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#22D3EE] rounded-full animate-pulse"></span>
              Contact Information
            </h3>

            {/* Email quick selector */}
            <div className="p-6 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-slate-900 flex justify-between items-center hover:border-[#22D3EE]/30 group transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/15 flex items-center justify-center text-[#22D3EE] group-hover:scale-105 transition-transform">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    EMAIL
                  </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm text-white font-medium hover:text-[#22D3EE] transition-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                id="copy-email-btn"
                className="p-2.5 rounded-lg bg-slate-950 border border-slate-900 group shadow-md text-slate-400 hover:text-white hover:border-[#22D3EE]/30 active:bg-[#22D3EE]/10 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <CheckCircle size={14} className="text-[#22D3EE] animate-bounce" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Telephone detail */}
            <div className="p-6 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-slate-900 flex items-center gap-4 hover:border-[#22D3EE]/30 group transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/15 flex items-center justify-center text-[#22D3EE] group-hover:scale-105 transition-transform">
                <Phone size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  MOBILE PHONE
                </span>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm text-white font-medium hover:text-[#22D3EE] transition-all">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location details */}
            <div className="p-6 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-slate-900 flex items-center gap-4 hover:border-[#22D3EE]/30 group transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/15 flex items-center justify-center text-[#22D3EE] group-hover:scale-105 transition-transform">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  LOCATION
                </span>
                <span className="text-xs sm:text-sm text-white font-medium">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                id="contact-github"
                className="flex-1 p-3.5 bg-slate-950/60 hover:bg-slate-900 border border-slate-900 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-black/20"
              >
                <Github size={14} className="text-blue-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin"
                className="flex-1 p-3.5 bg-[#0a0a0f]/60 hover:bg-slate-900 border border-slate-900 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-black/20"
              >
                <Linkedin size={14} className="text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column Interactive Form */}
          <div className="lg:col-span-7 relative" id="contact-form-container">
            {/* Minimalist vertical floating email on standard desktop right margins */}
            <div className="hidden xl:block absolute -right-20 bottom-24 origin-bottom-right rotate-90 text-[11px] font-mono tracking-widest text-[#22D3EE]/30">
              saquibraza5683@gmail.com
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
              className="bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-[#22D3EE]/25 p-6 sm:p-10 relative overflow-hidden group shadow-2xl shadow-black/45 duration-300"
            >
              {/* Internal decorative backdrop glowing blur spots */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#10B981]/15 via-[#8B5CF6]/10 to-transparent rounded-full pointer-events-none -z-10" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-tr from-[#22D3EE]/12 via-[#8B5CF6]/5 to-transparent rounded-full pointer-events-none -z-10" />
 
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex flex-col gap-1">
                  <h3 className="font-mono font-black text-2xl text-white tracking-tight flex items-center gap-2 select-none uppercase">
                    Let's Connect <span className="text-[#22D3EE] animate-pulse">✨</span>
                  </h3>
                  <p className="text-[9px] font-mono text-[#10B981] uppercase tracking-widest font-bold">
                    ESTABLISHING SECURE PROTOCOL
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[9px] font-mono text-[#10B981] font-black tracking-widest uppercase">
                  WEB PORTAL
                </div>
              </div>

              {formSuccess && (
                <div id="form-success-alert" className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-start gap-3">
                  <CheckCircle size={18} className="shrink-0 mt-0.5 animate-bounce" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono text-white">
                      Transmission Dispatched
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Thank you! Your message has been sent successfully and received directly in Mohammad's inbox.
                    </p>
                  </div>
                </div>
              )}

              {formError && (
                <div id="form-error-alert" className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-start gap-3">
                  <AlertCircle size={18} className="shrink-0 mt-0.5 animate-pulse" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono text-white">
                      Connection Interrupted
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      We couldn't deliver your message via the gate. Please try emailing directly to <span className="text-white underline">saquibraza5683@gmail.com</span>!
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col opacity-100 relative group/input">
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="px-4.5 py-4.5 rounded-xl bg-zinc-950/90 border border-zinc-700 focus:border-[#22D3EE] text-sm text-white placeholder-zinc-300 transition-all font-mono w-full focus:outline-none focus:ring-1 focus:ring-[#22D3EE]/20 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                  />
                </div>

                <div className="flex flex-col opacity-100 relative group/input">
                  <input
                    type="email"
                    id="form-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="px-4.5 py-4.5 rounded-xl bg-zinc-950/90 border border-zinc-700 focus:border-[#22D3EE] text-sm text-white placeholder-zinc-300 transition-all font-mono w-full focus:outline-none focus:ring-1 focus:ring-[#22D3EE]/20 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                  />
                </div>

                <div className="flex flex-col opacity-100 relative group/input">
                  <textarea
                    id="form-message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Message"
                    className="px-4.5 py-4.5 rounded-xl bg-zinc-950/90 border border-zinc-700 focus:border-[#22D3EE] text-sm text-white placeholder-zinc-300 transition-all font-mono w-full resize-y min-h-[120px] focus:outline-none focus:ring-1 focus:ring-[#22D3EE]/20 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                  />
                </div>

                <button
                  type="submit"
                  id="form-submit-btn"
                  disabled={submitting}
                  className="w-full py-4.5 mt-2 bg-gradient-to-r from-[#8B5CF6] via-[#10B981] to-[#22D3EE] text-white font-mono font-black text-sm tracking-widest uppercase rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 relative cursor-pointer hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:scale-[1.01] active:scale-98"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-dashed border-white animate-spin"></span>
                      <span className="font-bold">SENDING...</span>
                    </span>
                  ) : (
                    <span className="font-extrabold uppercase flex items-center gap-1.5">
                      Send Connection Transmission →
                    </span>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
