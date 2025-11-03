import './AdminProfileTap.css';
import ProfileSection from './ProfileSection/ProfileSection';
export default function AdminProfileTap (){
    return (
        <section className="admin-profile-tab d-flex flex-column gap-5">
            <ProfileSection
                title="المعلومات الشخصية"
                showImage={true}
                fields={[
                    { label: "الاسم" },
                    { label: "اسم المستخدم" },
                    { label: "البريد الإلكتروني" },
                    { label: "رقم الهاتف" },
                ]}
                />

            <ProfileSection
            title="كلمة المرور"
            fields={[
                { label: "كلمة المرور الجديدة", type: "password" },
                { label: "تأكيد كلمة المرور", type: "password" },
            ]}
            />

        </section>
    );
}