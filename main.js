$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.main_nav-bar').css('background', '#0f1726');
    } else {
        $('.main_nav-bar').css('background', 'transparent');
    }
});
// NAVBAR ACTIVE LINK SWICTHING
document.getElementById("HME").addEventListener("click", function () {
    document.getElementById("HME").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("ABT").addEventListener("click", function () {
    document.getElementById("ABT").classList.add("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SCH").addEventListener("click", function () {
    document.getElementById("SCH").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SPK").addEventListener("click", function () {
    document.getElementById("SPK").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("PRC").addEventListener("click", function () {
    document.getElementById("PRC").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SPN").addEventListener("click", function () {
    document.getElementById("SPN").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("CNT").addEventListener("click", function () {
    document.getElementById("CNT").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
});
$('.custom-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});

const scheduleData = {
    day1: {
        date: "DECEMBER 9, 2024 (Monday)",
        events: [
            {
                time: "08:00 a.m - 09:00 a.m",
                title: "Registration",
                speaker: "",
                venue: "C block lobby",
                description: "Please carry your registration confirmation email and a valid ID proof for registration."
            },
            {
                time: "09:00 a.m - 10:00 a.m",
                title: "Inaugural Function",
                speaker: "",
                venue: "Peacock Hall",
                description: "Get ready to be inspired by our esteemed speakers and guests."
            },
            {
                time: "10:00 a.m - 10:30 a.m",
                title: "Refreshment Break",
                speaker: "",
                venue: "Open Air Theater",
                description: "Sbaks and beverages will be served. Time to network and recharge!"
            },
            {
                time: "10:30 a.m - 11:30 a.m",
                title: "Invited Talk 1 - Building code switched/code mixed speech synthesis in Indian Languages.",
                speaker: "<strong>Dr. Hema A Murthy and Dr. Anusha Prakash</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Invited Talk 2 - Advances in Deep Learning",
                speaker: "<strong>Dr. C. Chandra Sekhar</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "12:30 p.m - 02:00 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "02:00 p.m - 03:00 p.m",
                title: "Invited Talk 3 - Speech Processing using Deep Neural Networks (DNN)",
                speaker: "<strong>Dr. K Sri Rama Murthy</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "03:00 p.m - 03:30 p.m",
                title: "Refreshment Break",
                speaker: "",
                venue: "Open Air Theater",
                description: "N/A"
            },
            {
                time: "03:30 p.m - 05:00 p.m",
                title: "Industry Perspective Talk 1 - Title to be updated",
                speaker: "<strong>Vikram C M</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "05:00 p.m - 06:30 p.m",
                title: "Networking Party",
                speaker: "",
                venue: "Open Air Theater",
                description: "N/A"
            },
            // Add more events for Day 1 as needed
        ]
    },
    day2: {
        date: "DECEMBER 10, 2024 (Tuesday)",
        events: [
            {
                time: "8.30 a.m - 9.00 a.m",
                title: "Invited Talk  - Quantum Leap in Speech Recognition – Beyond GenAI and LLMs",
                speaker: "<strong>Dr. Nixon Patel</strong>",
                venue: "Peacock Hall",
                description: "strong>Abstract: </strong> Artificial intelligence's (AI), and its derivatives like the Generative AI and Large Language Models (LLMs), capabilities have significantly transformed speech technology in the past decade and a half. But an equally exciting innovation is anticipated to be an even bigger game changer in the industry: quantum computing. This advancing field in computer science uses the unique principles of quantum mechanics to address problems that lie beyond the capabilities of even the most sophisticated classical computers.Speech recognition systems, for instance, rely on recognizing patterns in sound, context, and language structures, which require immense computational power.Current classical methods involve comparing a voice input against massive phonetic and language pattern databases to determine the most accurate match, but quantum algorithms, using qubits in superposition, could compare and match these patterns more efficiently. This would significantly improve the speed and accuracy of transcription, making systems like virtual assistants or automated customer service more responsive and accurate. Quantum algorithms can also improve noise reduction and data compression techniques, making speech recognition more reliable in noisy environments.Furthermore, quantum computing could revolutionize machine learning models used for speech synthesis (converting text into realistic speech) and emotion detection (analyzing sentiment and emotional tone in speech).Finally, language can naturally be treated as a quantum process and, as a result, is subject to quantum computational benefits. Particular features of current Quantum Natural Language Processing (QNLP) include language-neutral but still fully interpretable representations—meaning-awareness well beyond current LLMs, which can substantially help with speech recognition—and structures that are intrinsically multimodal and can strongly support multimodal forms of speech technology for Indic languages!

            },
            {
                time: "9:00 a.m - 10:00 a.m",
                title: "Invited Talk 4 - Multi-Lingual Audio Deepfake Detection Corpus",
                speaker: "<strong>Dr. Hemant A Patil</strong>",
                venue: "Peacock Hall",
                description: "strong>Abstract: </strong>Deepfakes are artificially generated fake media using deep learning (DL) methods. Recent study found that deepfakes are challenging to detect even for human listeners, however, machines can do better job in their detection. This talk present development of recent Multi-Lingual Audio Deepfake Detection Corpus (MLADDC) to boost the Audio DeepFake Detection (ADD) research. Existing datasets for ADD suffer from several limitations; in particular, they are limited to one or two languages. Proposed dataset contains 20 languages, which have been released in 4 Tracks (6 - Indian languages, 14 - International languages, 20 languages half-truth data, and combined data). Moreover, the proposed dataset has 400 K files (1,125+ hours) of data, which makes it one of the largest datasets. Deepfakes in MLADDC have been produced using advanced Deep Learning (DL) methods, such as HiFi- GAN and BigVGAN. Another novelty of this corpus lies in its sub-dataset, that has partial deepfakes (Half-Truth). We compared our dataset with various existing datasets, using cross-database method. For comparison, we also proposed baseline accuracy of 68.44%, and EER of 40.9% with MFCC features and CNN classifier (14 languages track only) indicating technological challenges associated with ADD task on proposed dataset. The talk will also discuss some of the open research challenges in this ADD research, more so, in the multilingual context."
            },
            {
                time: "10:00 a.m - 11:00 a.m",
                title: "Industry Perspective Talk 2 - Development of Text to Speech Synthesis System for Santhali - A Low Resource Language",
                speaker: "<strong>Dr. Pranaw Kumar</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "11:00 a.m - 11:30 a.m",
                title: "Meet and Greet",
                speaker: "",
                venue: "Open Air Theater",
                description: "Snacks and beverages will be served. Time to network and recharge!"
            },
            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Invited Talk 5 - Recent Efforts for Automatic Speech Recognition (ASR) in Indian Languages",
                speaker: "<strong>Dr. S Umesh</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "12:30 p.m - 02:00 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "02:00 p.m - 03:00 p.m",
                title: "Invited Talk 6 - Spoken Language Identification Techniques for Indian Languages",
                speaker: "<strong>Dileep A D</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "03:00 p.m - 03:30 p.m",
                title: "Snack Interval",
                speaker: "",
                venue: "Open Air Theater",
                description: "Its time to recharge and network with other participants."
            },
            {
                time: "03:30 p.m - 05:00 p.m",
                title: "Industry Perspective Talk 3 - Attentive Multilingual Speech Encoder for Zero-Prior ASR",
                speaker: "<strong>Dr. Debamalya Chakraborty </strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "05:00 p.m - 06:30 p.m",
                title: "Knowledge Exchange Gathering",
                speaker: "",
                venue: "Open Air Theater",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            // Add more events for Day 2 as needed
        ]
    },

    day3: {
        date: "DECEMBER 11, 2024 (Wednesday)",
        events: [
            {
                time: "9:00 a.m - 10:00 a.m",
                title: "Invited Talk 7 - Are Indic languages  prosodically different?",
                speaker: "<strong>Dr. T Nagarajan</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "10:00 a.m - 11:00 a.m",
                title: "Invited Talk 8 - Representation Learning For Emotional Artificial Intelligence",
                speaker: "<strong>Dr. Sriram Ganapathy</strong>",
                venue: "Peacock Hall",
                description: "strong>Abstract: </strong>Though AI systems now excel at understanding and generating human languages, they are largely emotionally inept, thereby hindering their ability to engage in natural  interactions. This talk focuses on the frontier of artificial emotional intelligence in speech systems, addressing two key challenges: emotion recognition and generation. I will delve into how representation learning techniques impact both these areas. <br> First, I will describe our efforts on Content and Acoustic Representations for Emotions (CARE), a novel approach based on distillation based learning of speech representations. By capturing the subtle nuances of representing acoustic and textual contents of speech, CARE allows to better recognize the emotional classes of speech. <br> Next, I will discuss our recent work on zero-shot emotion conversion, where a system learns to transform the emotional tone of speech without any supervision. This task is  made possible through the power of disentangled and factorized representations of speech. <br>Finally, the talk will explore the application of these approaches to data from Indian languages, opening up the possibilities for building emotionally intelligent speech and language systems for Indian users."
            },
            {
                time: "11:00 a.m - 11:30 a.m",
                title: "Mingling Moment",
                speaker: "",
                venue: "Open Air Theater",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Invited Talk 9 - Assistive speech technologies",
                speaker: "<strong>Dr. P Vijayalakshmi</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "12:30 p.m - 02:00 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "02:00 p.m - 03:00 p.m",
                title: "Invited Talk 10 - Learning for machines: Insights from acoustic analyses",
                speaker: "<strong>Priyankoo Sarmah</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "03:00 p.m - 03:30 p.m",
                title: "Snack Interval",
                speaker: "",
                venue: "Open Air Theater",
                description: "Have a break and network with other participants."
            },
            {
                time: "03:30 p.m - 05:00 p.m",
                title: "Industry Perspective Talk 4 - Advancing Text-to-Speech Technology for Indic Languages: Motivation, Architectural Frameworks, and Performance Evaluation",
                speaker: "<strong>Dr. Sreeram Ganji</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "05:00 p.m - 06:30 p.m",
                title: "Poster Presentation by Research Scholars",
                speaker: "",
                venue: "SAC Hall, R-Block, Ground Floor",
                description: "Get insights on the ground breaking research work done by the research scholars in the field of Speech Processing."
            },
            {
                time: "06:00 p.m onwards",
                title: "Ideas & Appetites",
                speaker: "",
                venue: "Vijayawada Club",
                description: "Enjoy the journey. Chat with other bright minds, share your thoughts, and enjoy a delicious meal. It's the perfect recipe for making new connections!"
            },
            // Add more events for Day 3 as needed
        ]
    },

    day4: {
        date: "DECEMBER 12, 2024 (Thursday)",
        events: [
            {
                time: "9:00 a.m - 10:00 a.m",
                title: "Invited Talk  - Implicit Processing of Speech for Spoken Language Diarization",
                speaker: "Dr. Jagabandhu Mishra",
                venue: "Peacock Hall",
                description: "Spoken language diarization (LD) involves the automatic annotation of monolingual segments within a code-switched (CS) speech signal. CS occurs when a speaker alternates between languages during a conversation. Studies indicate that approximately 43% of the world's population is bilingual, meaning that natural conversations often include bilingual or multilingual utterances. Research suggests that the performance of speech-based systems declines significantly when handling CS utterances. One potential solution is to incorporate LD as a preprocessing module to mitigate this issue. In general, either of the languages present in the CS utterance (assume native Indian languages) is resource-scarce in nature. Hence the use of implicit approaches is preferable over explicit (need linguistic resources). However, implementing these approaches presents several challenges. This presentation will highlight the progress made in addressing these challenges and the opportunities for further advancements."
            },
            {
                time: "10:00 a.m - 11:00 a.m",
                title: "Invited Talk - Processing of speech recorded from stroke patients",
                speaker: "Dr. Govind D",
                venue: "",
                description: "This talk examines the complex challenges and methodologies involved in analyzing speech patterns of stroke patients, exploring how advanced signal processing and machine learning techniques can help understand and quantify speech impairments. The discussion covers innovative approaches to processing dysarthric speech, tracking recovery patterns, and developing automated assessment tools, ultimately contributing to better rehabilitation strategies and clinical outcomes for stroke survivors with speech disorders."
            },
            {
                time: "11:00 a.m - 11:30 a.m",
                title: "Mingling Moment",
                speaker: "",
                venue: "Open Air Theater",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Invited Talk  - Approaches to recording and processing of voice samples of neurological patients",
                speaker: "<strong>Dr. Rajeev Aravindakshan</strong>",
                venue: "Peacock Hall",
                description: "This talk addresses the specialized methodologies and considerations required when collecting and analyzing voice samples from individuals with neurological conditions. The discussion explores crucial aspects of data collection protocols, environmental controls, and advanced signal processing techniques tailored for impaired speech patterns. From managing patient fatigue and varying symptom severity to developing robust analysis frameworks, the talk examines how these approaches contribute to better understanding of neurological conditions and their impact on speech, ultimately advancing both diagnostic capabilities and treatment strategies."
            },
            {
                time: "12:30 p.m - 02:00 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "02:00 p.m - 03:00 p.m",
                title: "Invited Talk 14 - Insights into Speech Disorders: Bridging Research and Practice",
                speaker: "<strong>Dr. Rakesh U K</strong>",
                venue: "Peacock Hall",
                description: "This talk explores the vital intersection between clinical research and practical applications in understanding and treating speech disorders. The discussion delves into cutting-edge research findings on various speech pathologies, examining how these insights inform therapeutic interventions, diagnostic tools, and technological solutions. By connecting laboratory discoveries with clinical practice, the talk highlights innovative approaches that enhance assessment accuracy, treatment effectiveness, and quality of life for individuals with speech disorders."
            },
            {
                time: "03:00 p.m - 04:00 p.m",
                title: "Invited Talk - Securing the Audio Domain: Cyber Threats and Effective Mitigation Strategies",
                speaker: "<strong>Dr. Arun Sankar M S</strong>",
                venue: "Peacock Hall",
                description: "This talk addresses the specialized methodologies and considerations required when collecting and analyzing voice samples from individuals with neurological conditions. The discussion explores crucial aspects of data collection protocols, environmental controls, and advanced signal processing techniques tailored for impaired speech patterns. From managing patient fatigue and varying symptom severity to developing robust analysis frameworks, the talk examines how these approaches contribute to better understanding of neurological conditions and their impact on speech, ultimately advancing both diagnostic capabilities and treatment strategies."
            },
            {
                time: "04:00 p.m - 04:30 p.m",
                title: "Informal Exchange",
                speaker: "",
                venue: "Open Air Theater",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            {
                time: "04:30 p.m - 05:30 p.m",
                title: "Veledictory Function",
                speaker: "",
                venue: "Peacock Hall",
                description: "N/A"
            },
            // Add more events for Day 4 as needed
        ]
    },
};

function generateSchedule(day) {
    const dayData = scheduleData[`day${day}`];
    
    // Update date
    document.getElementById("sch_date").innerHTML = dayData.date;
    
    // Clear existing content
    const scheduleBlock = document.getElementById("schedule_block");
    scheduleBlock.innerHTML = `
        <div class="schedule_item_heading mb-5 wow animated flipInX" data-wow-duration="1s" data-wow-delay="0.2s">
            <h3 class="text-center" id="sch_date">${dayData.date}</h3>
        </div>
    `;
    
    // Generate accordion items
    dayData.events.forEach((event, index) => {
        const accordionItem = `
            <div class="row w-75 mx-auto g-0 custom-acc-row wow animated fadeInLeft" data-wow-duration="1s"
                data-wow-delay="${0 + index * 0.05}s">
                <div class="col-md-12 w-100">
                    <div class="accordion" id="accordion_${index + 1}">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index + 1}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index + 1}" aria-expanded="true" aria-controls="collapse${index + 1}"
                                    style="display: inline-block!important;">
                                    <div class="row gx-5">
                                        <div class="col-md-3">
                                            <div class="accordion-item-heading" style="padding:15px 0px;">
                                                <h4>${event.time}</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="accordion-title" style="padding:15px 0px;">
                                                <span id="acc-title-${index * 2 + 1}">${event.title}</span><br> <br>
                                                <span id="acc-title-${index * 2 + 2}">${event.speaker}</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapse${index + 1}" class="accordion-collapse collapse" aria-labelledby="heading${index + 1}"
                                data-bs-parent="#accordion_${index + 1}">
                                <div class="accordion-body">
                                    <div class="row gx-5">
                                        <div class="col-md-3">
                                            <div class="venue-title">
                                                <small class="text-muted">Venue: ${event.venue}</small>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="venue-desc">
                                                <p>${event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        scheduleBlock.innerHTML += accordionItem;
    });
}

// Event listeners for buttons
["btn-1", "btn-2", "btn-3", "btn-4"].forEach((btnId, index) => {
    document.getElementById(btnId).addEventListener("click", function () {
        // Remove active class from all buttons
        ["btn-1", "btn-2", "btn-3", "btn-4"].forEach(id => 
            document.getElementById(id).classList.remove("active_schedule_btn")
        );
        
        // Add active class to clicked button
        this.classList.add("active_schedule_btn");
        
        // Generate schedule for the selected day
        generateSchedule(index + 1);
    });
});

// Initialize with Day 1
generateSchedule(1);

// fakeloader initialization
$(document).ready(function () {
    $.fakeLoader({
        timeToHide: 2000,
        bgColor: "rgb(27, 208, 126)",
        spinner: "spinner7"
    });
});
// $(function () {
//     $("html").niceScroll();
// });
// $("html").niceScroll({
//     cursorcolor: "#1bce7c", // change cursor color in hex
//     cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
//     cursorborder: "1px solid #1bce7c", // css definition for cursor border
//     cursorborderradius: "6px", // border radius in pixel for cursor
//     scrollspeed: 35, // scrolling speed
//     mousescrollstep: 25, // scrolling speed with mouse wheel (pixel)
// });
// Newsletter POP UP
$(document).ready(function () {
    setTimeout(function () {
        $('#myModal').modal('show');
    }, 20000);
});
$("#closebtn").click(function(){
    $('.modal-backdrop').remove();
});
$("#closebutton").click(function(){
    $('.modal-backdrop').remove();
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
});

document.addEventListener('DOMContentLoaded', function() {
    const currentDateElement = document.getElementById('currentDate');
    const registrationTypeElement = document.getElementById('registrationType');
    const accommodationElement = document.getElementById('accommodation');
    const accommodationDates = document.getElementById('accommodationDates');
    const accommodationTypeElement = document.getElementById('accommodationType');
    const checkInDateElement = document.getElementById('checkInDate');
    const checkOutDateElement = document.getElementById('checkOutDate');
    const numberOfDaysElement = document.getElementById('numberOfDays');
    const resultElement = document.getElementById('result');
    const earlyBirdMessageElement = document.getElementById('earlyBirdMessage');

    // Prices
    const earlyBirdDate = new Date('2024-11-20');
    const earlyBirdPrices = { student: 2000, academia: 5000, 'non-academia': 7000 };
    const regularPrices = { student: 3000, academia: 6000, 'non-academia': 8000 };
    const accommodationPrices = {
        student: 750,  // per day
        professional: 1200  // per day for academia and non-academia
    };

    // Get the current date
    const currentDate = new Date();
    currentDateElement.innerText = currentDate.toDateString();

    // Show Early Bird message
    if (currentDate <= earlyBirdDate) {
        earlyBirdMessageElement.innerHTML = "<h4 style='color: green; text-style: justified;'>You are eligible for the Early Bird discount and it will be automatically applied while calculating price</h4>";
    } else {
        earlyBirdMessageElement.innerHTML = "<h4 style='color: red; text-style: justified;'>Ahaah! You missed the Early Bird Discount</h4>";
    }

    // Update accommodation type based on registration type
    function updateAccommodationType() {
        const registrationType = registrationTypeElement.value;
        if (registrationType === 'student') {
            accommodationTypeElement.value = 'Student Accommodation (₹750/day)';
        } else {
            accommodationTypeElement.value = 'Professional Accommodation (₹1200/day)';
        }
    }

    // Show/hide accommodation options
    accommodationElement.addEventListener('change', function() {
        if (accommodationElement.value === 'yes') {
            accommodationDates.style.display = 'block';
            updateAccommodationType();
        } else {
            accommodationDates.style.display = 'none';
        }
    });

    registrationTypeElement.addEventListener('change', function() {
        if (accommodationElement.value === 'yes') {
            updateAccommodationType();
        }
    });

    // Calculate number of days between check-in and check-out
    function calculateDays() {
        const checkIn = new Date(checkInDateElement.value);
        const checkOut = new Date(checkOutDateElement.value);
        
        if (checkIn && checkOut && checkOut >= checkIn) {
            const diffTime = Math.abs(checkOut - checkIn);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            numberOfDaysElement.textContent = diffDays;
            return diffDays;
        }
        numberOfDaysElement.textContent = '0';
        return 0;
    }

    checkInDateElement.addEventListener('change', calculateDays);
    checkOutDateElement.addEventListener('change', calculateDays);

    // Calculate the total price
    window.calculatePrice = function() {
        const registrationType = registrationTypeElement.value;
        const prices = currentDate <= earlyBirdDate ? earlyBirdPrices : regularPrices;
        let registrationCost = prices[registrationType];
        let accommodationCost = 0;
        let totalCost = registrationCost;

        if (accommodationElement.value === 'yes') {
            const days = calculateDays();
            if (days > 0) {
                const dailyRate = registrationType === 'student' ? 
                    accommodationPrices.student : 
                    accommodationPrices.professional;
                accommodationCost = dailyRate * days;
                totalCost += accommodationCost;
            }
        }

        // Display detailed breakdown
        resultElement.innerHTML = `
            <div class="price-breakdown">
                <div>Registration Fee: ₹${registrationCost}</div>
                ${accommodationElement.value === 'yes' ? 
                    `<div>Accommodation Cost: ₹${accommodationCost} (${calculateDays()} days)</div>` : 
                    ''}
                <div class="total-price">Total Cost: ₹${totalCost}</div>
            </div>`;
    }
});


function checkAllPricingBlocks() {
    const currentDate = new Date();
    
    // Select all pricing blocks
    const pricingBlocks = document.querySelectorAll('.pricing-block');
    
    pricingBlocks.forEach(block => {
        const validFrom = new Date(block.dataset.validFrom);
        const validUntil = new Date(block.dataset.validUntil);
        validUntil.setHours(23, 59, 59);
        
        // Get the parent column
        const parentColumn = block.closest('.col-sm-12');
        
        if (currentDate >= validFrom && currentDate <= validUntil) {
            block.classList.remove('inactive');
            block.classList.add('active');
            // Enable clicks on parent column
            if (parentColumn) {
                parentColumn.classList.remove('inactive-container');
                parentColumn.classList.add('active-container');
            }
        } else {
            block.classList.remove('active');
            block.classList.add('inactive');
            // Disable clicks on parent column
            if (parentColumn) {
                parentColumn.classList.remove('active-container');
                parentColumn.classList.add('inactive-container');
            }
        }
        
        if (block.classList.contains('active')) {
            updateBlockCountdown(block, validUntil);
        }
    });
}

function updateBlockCountdown(block, endDate) {
    const now = new Date();
    const timeLeft = endDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        const h6Element = block.querySelector('h6');
        if (h6Element) {
            // Store the original text in a data attribute if not already stored
            if (!h6Element.dataset.originalText) {
                h6Element.dataset.originalText = h6Element.textContent.split('-')[0].trim();
            }
            
            // Use the stored original text
            h6Element.innerHTML = `${h6Element.dataset.originalText}<br>${days}d ${hours}h left`;
        }
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', function() {
    checkAllPricingBlocks();
    // Check every minute
    setInterval(checkAllPricingBlocks, 60000);
});