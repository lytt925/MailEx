# DROP database mailex;
use mailex;

CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255) UNIQUE NOT NULL,
  `email` varchar(255) UNIQUE,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `age` integer NOT NULL,
  `country_code` CHAR(2) NOT NULL,
  `gender` ENUM ('male', 'female', 'others') NOT NULL,
  `profile_content` text,
  `password_hash` varchar(80),
  `is_google_account` bool,
  `is_line_account` bool
);

CREATE TABLE `user_preferred_countries` (
  `user_id` integer,
  `country_code` CHAR(2),
  PRIMARY KEY (`user_id`, `country_code`)
);


CREATE TABLE `user_preferred_age_range` (
  `user_id` integer PRIMARY KEY,
  `age_range_start` integer,
  `age_range_end` integer
);

CREATE TABLE `languages` (
  `code` VARCHAR(10) PRIMARY KEY,
  `name` VARCHAR(100)
);

CREATE TABLE `user_preferred_languages` (
  `user_id` INTEGER,
  `language_code` VARCHAR(10),
  FOREIGN KEY (`language_code`) REFERENCES `languages` (`code`),
  PRIMARY KEY (`user_id`, `language_code`)
);

-- Create `user_languages` table with language code reference
CREATE TABLE `user_languages` (
  `user_id` INTEGER,
  `language_code` VARCHAR(10),
  `proficiency_level` ENUM('beginner', 'elementary', 'intermediate', 'proficient', 'native'),
  FOREIGN KEY (`language_code`) REFERENCES `languages` (`code`),
  PRIMARY KEY (`user_id`, `language_code`)
);

CREATE TABLE `users_hobbies` (
  `user_id` integer,
  `hobby_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`, `hobby_name`)
);


CREATE TABLE `countries` (
  `code` CHAR(2) PRIMARY KEY NOT NULL,
  `country_name` varchar(50) NOT NULL,
  `alpha3_code` char(3) NOT NULL
);

CREATE TABLE `mails` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `sender_id` integer,
  `receiver_id` integer,
  `content` text,
  `status` ENUM ('arrived', 'sending', 'draft'),
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `sent_at` timestamp,
  `arrived_at` timestamp
);

CREATE TABLE `images` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `mail_id` integer,
  `image_url` varchar(255) NOT NULL
);

CREATE TABLE `notifications` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `user_id` integer,
  `type` varchar(50),
  `content` text,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP
);

-- Add foreign key constraints to other tables
ALTER TABLE `users` ADD FOREIGN KEY (`country_code`) REFERENCES `countries` (`code`);
ALTER TABLE `user_preferred_countries` ADD FOREIGN KEY (`country_code`) REFERENCES `countries` (`code`);
ALTER TABLE `user_preferred_countries` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
ALTER TABLE `user_preferred_languages` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
ALTER TABLE `user_languages` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
ALTER TABLE `users_hobbies` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
ALTER TABLE `mails` ADD FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`);
ALTER TABLE `mails` ADD FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`);
ALTER TABLE `images` ADD FOREIGN KEY (`mail_id`) REFERENCES `mails` (`id`) ON DELETE CASCADE;
ALTER TABLE `notifications` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
