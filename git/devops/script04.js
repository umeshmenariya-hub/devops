  document.addEventListener('DOMContentLoaded', () => {
            const topicContents = document.querySelectorAll('.topic-content');
            const navLinks = document.querySelectorAll('.sidebar a');
            const sidebar = document.getElementById("main-sidebar");
            const toggleBtn = document.getElementById("toggleSidebar");

            // Hide sidebar on initial load and set button text
            sidebar.classList.add('hidden');
            toggleBtn.textContent = 'Show topic';

            window.showTopic = function (topicId) {
                topicContents.forEach(content => content.classList.remove('visible'));

                const selectedTopic = document.getElementById(topicId);
                if (selectedTopic) selectedTopic.classList.add('visible');

                navLinks.forEach(link => link.classList.remove('active'));

                const selectedLink = document.querySelector(`.sidebar a[data-topic="${topicId}"]`);
                if (selectedLink) selectedLink.classList.add('active');
            }

            window.toggleSidebar = function () {
                const isHidden = sidebar.classList.toggle('hidden');
                toggleBtn.textContent = isHidden ? 'Show topic' : 'Hide topic';
            }

            // show welcome topic by default
            showTopic('topic-welcome');

            window.downloadPDF = function () {
                alert(`This content will be downloaded as a PDF`)
                const visibleContent = document.querySelector('.topic-content.visible');

                if (!visibleContent) {
                    alert("No topic selected");
                    return;
                }

                html2pdf().from(visibleContent).save();
            };

        });

