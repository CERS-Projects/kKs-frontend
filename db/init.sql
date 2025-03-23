CREATE DATABASE IF NOT EXISTS kKs;

USE kKs;

CREATE TABLE IF NOT EXISTS user (
    user_id VARCHAR(50) PRIMARY KEY,
    mailaddress VARCHAR(320) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
    nickname VARCHAR(100) NOT NULL UNIQUE,
);

CREATE TABLE IF NOT EXISTS thread (
    thread_id INT PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL,
    posted_time DATETIME NOT NULL,
    content VARCHAR(200) NOT NULL,
    reply_count INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE IF NOT EXISTS bookmark (
    thread_id INT,
    user_id VARCHAR(50),
    PRIMARY KEY (thread_id, user_id),
    FOREIGN KEY (thread_id) REFERENCES thread(thread_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
);

CREATE TABLE IF NOT EXISTS comment (
    comment_id INT PRIMARY KEY,
    thread_id INT,
    reply_to_comment_id INT,
    posted_time DATETIME NOT NULL,
    content VARCHAR(200) NOT NULL,
    reply_count INT NOT NULL,
    FOREIGN KEY (thread_id) REFERENCES thread(thread_id),
    FOREIGN KEY (reply_to_comment_id) REFERENCES comment(comment_id),
);

INSERT INTO user (user_id, mailaddress, password, nickname) VALUES
('user123', 'user123@example.com', 'hashed_password1', 'UserOne'),
('user456', 'user456@example.com', 'hashed_password2', 'UserTwo'),
('user789', 'user789@example.com', 'hashed_password3', 'UserThree');

INSERT INTO thread (thread_id, user_id, title, posted_time, content, reply_count) VALUES
(1, 'user123', '最初のスレッド', '2024-03-15 10:00:00', 'スレッドの最初の内容です。', 1),
(2, 'user456', '二番目のスレッド', '2024-03-15 11:00:00', '別のスレッドの内容です。', 1),
(3, 'user789', '三番目のスレッド', '2024-03-15 12:00:00', 'さらに別のスレッドの内容です。', 1);

INSERT INTO bookmark (thread_id, user_id) VALUES
(1, 'user456'),
(2, 'user789'),
(3, 'user123'),
(2, "user123"),
(1, 'user123');

INSERT INTO comment (comment_id, thread_id, reply_to_comment_id, posted_time, content, reply_count) VALUES
(1, 1, NULL, '2024-03-15 10:30:00', '最初のスレッドへの最初のコメントです。', 0),
(2, 2, NULL, '2024-03-15 11:30:00', '二番目のスレッドへの最初のコメントです。', 1),
(3, NULL, 2, '2024-03-15 11:45:00', '二番目のスレッドへの一番目のコメントです。', 0),
(4, 3, NULL, '2024-03-15 12:30:00', '三番目のスレッドへの最初のコメントです。', 2),
(5, NULL, 4, '2024-03-15 12:45:00', '四番目のコメントへの一番目のコメントです。', 0),
(6, NULL, 4, '2024-03-15 13:00:00', '四番目のコメントへの一番目のコメントです。', 0);