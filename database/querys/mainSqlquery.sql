CREATE TYPE accountType AS ENUM ('platform_user', 'content_creator_user');
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
# create table query
-- Table: public.user_table
-- DROP TABLE IF EXISTS public.user_table;
CREATE TABLE IF NOT EXISTS public.user_table (
    user_id uuid NOT NULL DEFAULT uuid_generate_v4(),
    username character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(100) COLLATE pg_catalog."default" NOT NULL,
    full_name character varying(100) COLLATE pg_catalog."default",
    bio text COLLATE pg_catalog."default",
    website character varying(255) COLLATE pg_catalog."default",
    designation character varying(50) COLLATE pg_catalog."default",
    address text COLLATE pg_catalog."default",
    contact character varying(15) COLLATE pg_catalog."default",
    location character varying(50) COLLATE pg_catalog."default",
    profile_image character varying(50) COLLATE pg_catalog."default",
    social_profile jsonb,
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    user_status boolean,
    type_of_account accounttype NOT NULL DEFAULT 'platform_user'::accounttype,
    CONSTRAINT user_table_pkey PRIMARY KEY (user_id),
    CONSTRAINT user_table_email_key UNIQUE (email),
    CONSTRAINT user_table_username_key UNIQUE (username)
) TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.user_table OWNER to postgres;