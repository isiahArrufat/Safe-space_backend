-- db/seed.sql
\c jwt_auth

INSERT INTO users (username, password_hash, email, level, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', 'Explorer', NOW(), NOW()),
('jake', '$2b$10$8G2tGNNiaDYNhwOYfHIzq.1kJuzbsVnX2OvrZHb13zudeMFt2Mk2C', 'jake@example.com', 'Journeyman', NOW(), NOW()),
('krysty', '$2b$10$JZQB.IFhNjra99IT7bfzx.dgWF.3I8UNMWizxHzb5qp9czixvEeO2', 'krysty@example.com', 'Voyager', NOW(), NOW()),
('mike', '$2b$10$XVxBRoKh7cF7k7we9uaj3O/uv82k3hNrHZCPvNdnftXk69pgH.ea6', 'mike@example.com', 'Trailblazer', NOW(), NOW()),
('victor', '$2b$10$LPd03Hp8J8isPlFKusyge.Pb4g1ZMTuEH.I7.ZrkGk.zxMin9p1jC', 'victor@example.com', 'Pathfinder', NOW(), NOW()),
('chris', '$2b$10$1kkc8LVBs7Ai8DzQ6oTYEOatkbSGTpofqd8ySE6nCTz8rDuVy2QgS', 'chris@example.com', 'Master', NOW(), NOW());

-- passwords cat123, ilovecats, catsarecool, 123blue, girl123, boy123, 

INSERT INTO entries (user_id, body, mood, publish, created_at, updated_at)
VALUES 
('1', 'Reflecting on Nature Walk
Today, I embarked on a serene nature walk through the lush forest trails near my home. 
As I meandered along the winding paths, surrounded by towering trees and chirping birds, 
I felt a profound sense of peace wash over me. The crisp autumn air filled my lungs, 
invigorating my spirit with each breath. I paused by a tranquil stream, mesmerized by 
the gentle flow of water and the vibrant colors of the fallen leaves. In this moment of stillness, 
I found solace in natures beauty, and gratitude swelled within me for the simple joys that surround 
us every day.', ' Serene', true, NOW(), NOW()),
('2', 'Gratitude for Small Victories
Today was a day filled with small victories that filled my heart with gratitude. 
From completing a challenging task at work to sharing a heartfelt conversation 
with a dear friend, each moment brought its own sense of accomplishment and joy. 
Despite the inevitable hurdles and uncertainties that life presents, I am reminded 
of the resilience of the human spirit and the power of perseverance. Today taught me 
to celebrate the little victories, for they are the building blocks of a fulfilling 
and meaningful life.', 'Joyful', true, NOW(), NOW()),
('3', 'Embracing Change
Change is a constant companion on lifes journey, and today I found myself standing at the 
threshold of a new chapter. As I bid farewell to familiar routines and welcomed new opportunities, 
I felt a mixture of excitement and apprehension coursing through my veins. Yet, amidst the whirlwind 
of emotions, I found solace in the knowledge that change brings growth and transformation. With an 
open heart and a willingness to embrace the unknown, I embark on this new adventure, trusting in the 
infinite possibilities that lie ahead.', 'Reflective', true, NOW(), NOW()),
('4', 'Finding Joy in Creativity
Today, I immersed myself in the boundless world of creativity, losing myself in the rhythmic strokes 
of paintbrushes and the dance of colors on canvas. With each brushstroke, I felt a surge of energy and 
inspiration coursing through me, igniting a spark of joy in my soul. In the realm of creativity, there 
are no limits, no boundaries  only endless possibilities waiting to be explored. As I surrendered to 
the flow of imagination, I discovered that true happiness lies in the act of creation itself, in the 
freedom to express oneself without fear or judgment.', 'Inspired', true, NOW(), NOW()),
('5', 'Moments of Stillness
Amidst the chaos of everyday life, I cherish the moments of stillness that offer respite for the weary 
soul. Today, I found solace in the quietude of early morning, as the world slumbered peacefully and the 
sky painted hues of pink and gold. In the silence of dawn, I allowed myself to simply be, to listen to 
the rhythm of my own heartbeat and the whispers of my innermost thoughts. In these moments of stillness, 
I found clarity and renewal, reawakening to the beauty that surrounds me and the endless possibilities 
that await.', ' Peaceful', true, NOW(), NOW()),
('6', 'Navigating Uncertainty
Today, I found myself navigating the uncertain waters of change and transition, grappling with the ebb 
and flow of lifes everchanging tide. As I confronted the unknown with courage and resilience, I realized 
that uncertainty is not the enemy but rather a catalyst for growth and transformation. In the face of 
adversity, I discovered strength within myself that I never knew existed, and a newfound sense of 
purpose emerged from the depths of uncertainty. With each step forward, I embrace the journey, trusting 
that the path will reveal itself in due time.', 'Resilient', true, NOW(), NOW());

