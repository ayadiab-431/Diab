import './ProfileSection.css';

export default function ProfileSection({ title, showImage = false, fields = [] }) {
  return (
    <section className="profile-section-container p-3">
      <div className="section-heading mb-4">
        <h3>{title}</h3>
      </div>
      <div className="section-content d-flex flex-column gap-4 align-items-center justify-content-center">
        {showImage && (
          <div className="section-img">
            <img src={`${process.env.PUBLIC_URL}/assets/images/avatar.png`} alt="" />
          </div>
        )}
        <form className="section-form w-100">
          <div className="inputs-wrapper row w-100">
            {fields.map((field, index) => (
              <div key={index} className="input-field mb-3 col-sm-6 d-flex flex-column">
                <label className="mb-2">{field.label}</label>
                <input type={field.type || "text"} className='w-100'/>
                <span className="err"></span>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <input type="submit" value="حفظ التغييرات" className="save-changes" />
          </div>
        </form>
      </div>
    </section>
  );
}
