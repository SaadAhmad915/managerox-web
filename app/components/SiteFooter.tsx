import { Icon } from "@/app/components/Icon";
import { footer, nav } from "@/app/data/content";

export function SiteFooter() {
  return (
    <footer className="bg-midnight text-slate-300">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-10 px-6 pt-15 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-xl font-extrabold text-white">
            {nav.brand.lead}
            <span className="text-blue-400">{nav.brand.accent}</span>
          </div>
          <div className="mt-1 mb-4 text-[9px] font-semibold tracking-[1.5px] text-slate-500 uppercase">
            {nav.tagline}
          </div>
          <p className="mb-[18px] max-w-[260px] text-[13px] leading-[1.65] text-slate-400">
            {footer.blurb}
          </p>
          <div className="flex gap-2.5">
            {footer.socials.map((social) => (
              <a
                key={social.mark}
                href="#"
                aria-label={social.label}
                className="flex size-8 items-center justify-center rounded-lg bg-slate-800 text-[11px] font-extrabold text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
              >
                {social.mark}
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <div className="mb-4 text-sm font-extrabold text-white">
              {column.title}
            </div>
            <div className="flex flex-col gap-2.5 text-[13px]">
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div>
          <div className="mb-4 text-sm font-extrabold text-white">
            {footer.contact.title}
          </div>
          <div className="flex flex-col gap-3 text-[13px] text-slate-400">
            {footer.contact.rows.map((row) => (
              <div key={row.text} className="flex items-center gap-2.5">
                <Icon
                  name={row.icon}
                  size={16}
                  className="shrink-0 text-blue-400"
                />
                {row.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-[1160px] flex-wrap justify-between gap-4 border-t border-slate-800 px-6 py-5 text-xs text-slate-500">
        <div>{footer.legal}</div>
        <div>{footer.note}</div>
      </div>
    </footer>
  );
}
