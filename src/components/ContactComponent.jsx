import React from 'react'

const ContactComponent = () => {
  return (
    <div>
      {/* Hero Area */}
      <div style={{ backgroundColor: '#ebf8ff', padding: '3rem 0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3182ce' }}>Liên hệ với chúng tôi</h1>
          <p style={{ color: '#4a5568', marginTop: '1rem' }}>Chúng tôi luôn sẵn sàng hỗ trợ bạn!</p>
        </div>
      </div>

      {/* Contact Section */}
      <section style={{ padding: '3rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            {/* Form */}
            <div style={{ width: '100%', maxWidth: '600px' }}>
              <form style={{ backgroundColor: '#f7fafc', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <textarea
                  name="message"
                  rows="5"
                  style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', outline: 'none', fontSize: '1rem' }}
                  placeholder="Nhập tin nhắn"
                ></textarea>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập tên của bạn"
                    style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', fontSize: '1rem', outline: 'none' }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Địa chỉ email"
                    style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', fontSize: '1rem', outline: 'none' }}
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Nhập chủ đề"
                  style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', fontSize: '1rem', outline: 'none' }}
                />

                <button
                  type="submit"
                  style={{ width: '100%', backgroundColor: '#3182ce', color: '#ffffff', padding: '1rem', borderRadius: '0.5rem', fontSize: '1.1rem', cursor: 'pointer', transition: 'background-color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2b6cb0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#3182ce'}
                >
                  Gửi
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <i className="ti-home" style={{ fontSize: '1.5rem', color: '#3182ce' }} />
                <div>
                  <h3 style={{ fontWeight: '600', fontSize: '1.2rem' }}>Buttonwood, California</h3>
                  <p style={{ color: '#4a5568' }}>Rosemead, CA 91770</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <i className="ti-tablet" style={{ fontSize: '1.5rem', color: '#3182ce' }} />
                <div>
                  <h3 style={{ fontWeight: '600', fontSize: '1.2rem' }}>+1 253 565 2365</h3>
                  <p style={{ color: '#4a5568' }}>Thứ 2 - Thứ 6, 9h - 18h</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <i className="ti-email" style={{ fontSize: '1.5rem', color: '#3182ce' }} />
                <div>
                  <h3 style={{ fontWeight: '600', fontSize: '1.2rem' }}>support@colorlib.com</h3>
                  <p style={{ color: '#4a5568' }}>Gửi email bất cứ lúc nào!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactComponent
