import ReactDOM from "react-dom/client";
import React, { useState, useEffect, useRef } from "react";
import "./base.js";
import "../styles/courses.css";
import "../styles/base.css";

const SubmitButton = ({
  children,
  activeColor = "#ff4444",
  inactiveColor = "#808080",
  submittedText = "Отправлено",
  className = "",
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const dialog = document.getElementById("dialog_sign");
    if (!dialog) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "open" && dialog.open) {
          setIsSubmitted(false);
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
        }
      });
    });

    observer.observe(dialog, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e) => {
    const form = e.target.form;

    if (form) {
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
    }
    setIsSubmitted(true);
  };

  const buttonStyle = {
    backgroundColor: isSubmitted ? inactiveColor : activeColor,
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 500,
    transition: "background-color 0.3s ease",
    paddingLeft: "40px",
    paddingRight: "40px",
  };

  return (
    <button
      type="submit" // Важно для вызова стандартной валидации браузера
      style={buttonStyle}
      onClick={handleClick}
      className={className}
      disabled={isSubmitted}
    >
      {isSubmitted ? submittedText : children}
    </button>
  );
};

const ToDialogButton = ({
  onClick = {},
  children,
  activeColor = "#ff4444",
  className = "",
}) => {
  const buttonStyle = {
    backgroundColor: activeColor,
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 500,
    transition: "background-color 0.3s ease",
    paddingLeft: "40px",
    paddingRight: "40px",
  };

  return (
    <button onClick={onClick} style={buttonStyle} className={className}>
      {children}
    </button>
  );
};

const SignUpForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    console.log("Отправка данных:", formData);
    setFormData({ name: "", email: "" });

    if (onClose) onClose();
  };

  return (
    <form
      id="signupForm"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        gap: "10px",
      }}
    >
      <img
        onClick={onClose}
        src="../icon/close-bold-svgrepo-com.svg"
        alt="Закрыть"
        style={{
          position: "absolute",
          top: "5%",
          right: "2%",
          width: "7%",
          height: "7%",
          cursor: "pointer",
        }}
      />

      <h2>Записаться на курс</h2>

      <label htmlFor="name">Имя:*</label>
      <input
        maxLength={60}
        type="text"
        name="name"
        id="name"
        required
        placeholder="Иван Иванов"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">E-mail:*</label>
      <input
        maxLength={60}
        type="email"
        name="email"
        id="email"
        required
        placeholder="ivanov@gmail.com"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Используем SubmitButton вместо стандартной кнопки */}
      <SubmitButton
        activeColor="#ff4444"
        inactiveColor="#808080"
        submittedText="Отправлено"
        className="custom-submit-button"
      >
        Отправить
      </SubmitButton>

      <p>* — Обязательные поля</p>
    </form>
  );
};

const SignUpDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <dialog
      open
      id="dialog_sign"
      style={{
        position: 'fixed',          
        backgroundColor: "white",
        border: "none",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "95%",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <SignUpForm onClose={onClose} />
    </dialog>
  );
};

const CoursesPage = () => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <>
      <SignUpDialog isOpen={isDialogOpen} onClose={closeDialog} />

      <div id="intensive" className="main-content intensive">
        <h1>ЛЕТНИЕ ИНТЕНСИВНЫЕ КУРСЫ</h1>
        <ToDialogButton onClick={openDialog} className="signup-button">
          ЗАПИСАТЬСЯ
        </ToDialogButton>
      </div>

      <div className="container">
        <div className="content">
          <h1>
            Интенсивный курс норвежского языка — это краткосрочный (2–3 месяца)
            курс норвежского языка.
          </h1>
          <p>
            Проводится несколько раз в год для тех, кто нуждается в быстром и
            эффективном получении элементарных навыков общения на норвежском
            языке и сведений о стране изучаемого языка.
          </p>
          <p>
            Расписание занятий включает в себя до трёх занятий в неделю. За
            время обучения Вы получите лексический минимум, необходимый для
            общения на простые бытовые темы, и основы грамматики.
          </p>
          <p>
            После окончания интенсивного курса можно продолжить обучение в одной
            из групп основного курса норвежского языка.
          </p>
          <h2 className="highlight">Пройдя наш курс, вы научитесь:</h2>
          <ul>
            <li>
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты
            </li>
            <li>
              Вдали от всех живут они в буквенных домах на берегу Семантика
              большого языкового океана
            </li>
            <li>
              Великий Оксмокс предупреждал ее о злых запятых, диких знаках
              вопроса и коварных точках с запятой, но текст не дал сбить себя с
              толку
            </li>
          </ul>
          <ToDialogButton onClick={openDialog} className="button">
            ЗАПИСАТЬСЯ НА ИНТЕНСИВ
          </ToDialogButton>
        </div>
        <div className="sidebar">
          <img
            className="zoomable"
            src="../assets/images/course-teacher.png"
            alt="Инголфр и Сигритр"
            style={{ width: "100%" }}
          />
          <h2 className="highlight">Инголфр и Сигритр</h2>
          <p>Носители норвежского языка</p>
          <p>
            Портрет «начинающего студента» у меня нарисовался после работы с
            десятками тысяч писем и вопросов от студентов и пользователей сайта,
            поэтому взялась его «рисовать» я со знанием дела. Итак, начинающий
            классический!
          </p>
        </div>
      </div>

      <div id="group" className="main-content group">
        <h1>ОБУЧЕНИЕ В ГРУППАХ ПО ГРАФИКУ</h1>
        <ToDialogButton onClick={openDialog} className="signup-button">
          ЗАПИСАТЬСЯ
        </ToDialogButton>
      </div>

      <div className="container">
        <div className="content">
          <h1>
            Обучение в группах — самая доступная и популярная форма обучения в
            Скандинавской Школе
          </h1>
          <p>
            При обучении в группах используется фиксированное расписание
            занятий, ориентированное на определённые дни и время обучения. Вы
            можете выбрать наиболее удобный график занятий в вечернее, дневное,
            утреннее время как в будние дни, так и в выходные.
          </p>
          <p>
            По истечении основного курса норвежского языка уровень знаний, как
            правило, соответствует уровню B2 согласно системе европейского
            языкового портфеля.
          </p>
          <p>
            В настоящий момент в Скандинавской школе обучается более 10 тысяч
            студентов норвежского языка со всего мира. Если Вы уже изучали
            норвежский язык и хотите продолжить обучение, Вы можете пройти тест
            в электронном виде.
          </p>
          <h2 className="highlight">Пройдя наш курс, вы научитесь:</h2>
          <ul>
            <li>
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты
            </li>
            <li>На берегу семантика большого языкового океана</li>
            <li>Семантика большого языкового океана</li>
          </ul>
          <ToDialogButton onClick={openDialog} className="button">
            ЗАПИСАТЬСЯ НА ИНТЕНСИВ
          </ToDialogButton>
        </div>
        <div className="sidebar">
          <img
            className="zoomable"
            src="../assets/images/group-teacher.png"
            alt="Грай Астрид"
            style={{ width: "100%" }}
          />
          <h2 className="highlight">Грай Астрид</h2>
          <p>Путешественница, прошла курс «Обучение в группах»</p>
          <p>
            Портрет «начинающего студента» у меня нарисовался после работы с
            десятками тысяч писем и вопросов от студентов и пользователей сайта,
            поэтому взялась его «рисовать» я со знанием дела. Итак, начинающий
            классический!
          </p>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;

ReactDOM.createRoot(document.getElementById("rootCource")).render(
  <CoursesPage></CoursesPage>
);
