import React, { useMemo, useState } from 'react';

export default function OfficesTabs({ title = '', locations = {} }) {
  const entries = useMemo(() => Object.entries(locations || {}), [locations]);
  const firstKey = entries[0]?.[0] || '';
  const [activeCountryCode, setActiveCountryCode] = useState(firstKey);

  const active = locations?.[activeCountryCode] || entries[0]?.[1] || null;

  if (!active || entries.length === 0) return null;

  return (
    <section className="w-full bg-[#FDE820] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-blue font-title font-extrabold italic text-4xl md:text-6xl leading-[0.95]">
          {title}
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {entries.map(([countryCode, location]) => {
            const isActive = countryCode === activeCountryCode;
            return (
              <button
                key={countryCode}
                type="button"
                onClick={() => setActiveCountryCode(countryCode)}
                className={
                  isActive
                    ? 'px-6 py-3 rounded-full bg-blue text-white font-title italic font-extrabold text-sm md:text-base border-2 border-[#005ADA]'
                    : 'px-6 py-3 rounded-full bg-transparent text-[#005ADA] font-title italic font-extrabold text-sm md:text-base border-2 border-[#005ADA] hover:bg-blue/10'
                }
                aria-pressed={isActive}
              >
                {location?.tab || countryCode}
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          <div className="w-full overflow-hidden rounded-[28px] border-2 border-[#0b2f87] bg-white">
            <div className="w-full h-[320px] md:h-[420px]">
              <iframe
                src={active?.mapEmbed || ''}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                style={{ width: '100%', height: '100%', border: 0 }}
                title={`${active?.name || 'Office'} Map`}
              ></iframe>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h3 className="text-blue font-title font-extrabold italic text-4xl md:text-5xl leading-[0.95]">
                {active?.name}
              </h3>

              <div className="mt-4 space-y-3 text-blue font-text font-semibold">
                {active?.address && <p>{active.address}</p>}

                {Array.isArray(active?.phones) && active.phones.length > 0 && (
                  <div className="space-y-2">
                    {active.phones.map((phone) => (
                      <div key={phone} className="flex items-start gap-3">
                        <span className="mt-[2px]">+</span>
                        <a href={`tel:${phone}`} className="underline">
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {active?.email && (
                  <div className="flex items-start gap-3">
                    <span className="mt-[2px]">+</span>
                    <a href={`mailto:${active.email}`} className="underline break-all">
                      {active.email}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              {active?.image && (
                <div className="overflow-hidden rounded-[22px] border-2 border-[#0b2f87] bg-white">
                  <img
                    src={active.image}
                    alt={active?.name}
                    loading="lazy"
                    className="w-full h-[220px] md:h-[240px] object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
