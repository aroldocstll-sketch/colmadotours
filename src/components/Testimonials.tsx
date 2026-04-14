import React from 'react';
import { FormattedMessage } from 'react-intl';

const testimonials = [
{
name: 'Michael Johnson',
feedback: 'Everything was perfectly organized from pickup to return. Monkey Island truly went beyond what we expected.',
location: 'New York, USA',
avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
},
{
name: 'Ana Martinez',
feedback: 'Swimming with dolphins felt unreal — a lifelong dream fulfilled! I would absolutely recommend this tour company.',
location: 'Madrid, Spain',
avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
},
{
name: 'Oliver Thompson',
feedback: 'The party boat experience was incredible — great vibes, music, and stunning ocean views.',
location: 'London, UK',
avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
},
{
name: 'Elena Romano',
feedback: 'Riding horseback through the jungle was simply unforgettable. Definitely one of the highlights of Punta Cana!',
location: 'Rome, Italy',
avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
},
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="section-shell">
        <h2 className="mb-12 text-center text-5xl font-bold text-slate-900">
          <FormattedMessage id="testimonials.title" />
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="glass-card rounded-3xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full border-2 border-teal-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="italic text-slate-600">"{testimonial.feedback}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
