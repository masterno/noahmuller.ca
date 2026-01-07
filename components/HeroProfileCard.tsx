"use client";

import ProfileCard from "./ProfileCard";

export default function HeroProfileCard() {
    return (
        <div className="flex justify-center">
            <ProfileCard
                avatarUrl="/images/headshot.png"
                miniAvatarUrl="/images/headshot.png"
                name="Noah Muller"
                title="Kinesiologist & Developer"
                handle="noahmuller"
                status="Available for clients"
                contactText="Contact"
                showUserInfo
                enableMobileTilt
                innerGradient="linear-gradient(145deg, #3b5998 0%, #192f5d 100%)"
                behindGlowColor="rgba(59, 89, 152, 0.5)"
                behindGlowSize="50%"
                onContactClick={() => (window.location.href = "/contact")}
            />
        </div>
    );
}
