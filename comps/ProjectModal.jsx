import React from "react";
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import SanitizedHTML from 'react-sanitized-html';

export default function ProjectModal({ isOpen, toggleModalOpen, currentProject }) {
  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dialog"
      >
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOpen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="project-modal">
            <button className="close-modal" onClick={toggleModalOpen}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>

            {currentProject && <div className="box_inner">
              <div className="scrollable">
                <div className="blog-grid">
                  <article className="article">
                    <div className="article-title">
                      <h2>
                        {currentProject.title}
                      </h2>
                    </div>
                    <div className="media">
                      <div className="avatar">
                        <img src={currentProject.image_link} alt="Project Architecture" />
                      </div>
                    </div>
                    <div className="long_description">
                      <SanitizedHTML
                        allowedAttributes={{ 'a': ['href'] }}
                        allowedTags={['div', 'ul', 'li', 'p']}
                        html={currentProject.long_description}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
            }
          </div>
        </Modal>
      </CSSTransition>
    </>
  );
}
