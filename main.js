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
                time: "09:00 a.m - 10:30 a.m",
                title: "Inaugural Ceremony",
                speaker: "",
                venue: "Peacock Hall",
                description: "Get ready to be inspired by our esteemed speakers and guests."
            },
            {
                time: "10:30 a.m - 11:00 a.m",
                title: "Hi Tea",
                speaker: "",
                venue: "C Block Lobby",
                description: "N/A"
            },
            {
                time: "11:00 a.m - 12:00 p.m",
                title: "Inaugural Talk - Importance of phase in speech signal processing.",
                speaker: "<strong>Dr. Bayya Yegnanarayana</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong> In normal speech signal processing, the STFT phase spectrum is ignored, assuming that the phase is not important from perception point of view. The few attempts using the phase information either try to unwrap the phase or process the phase through group delay spectrum. In either case, the effects of the finite window used to compute the STFT dominate, affecting the phase spectrum and the continuity of phase features across frames. In order to understand and exploit the phase spectral information in signals, it is necessary to obtain the true phase without wrapping. Recently, I have proposed a method to obtain the phase without the need for phase wrapping. I will show that many of the speech production features can be derived from the phase representation of the speech signal. I will give the necessary signal processing background to appreciate the points I will be making in this talk.  It appears that speech information needs to be represented only through the phase spectrum, rather than through the magnitude spectrum for most of the speech applications.<br> <br> <strong>About Speaker: </strong> Dr. Bayya Yegnanarayana is currently Emeritus Professor and INSA Honorary Scientist at the International Institute of Information Technology Hyderabad (IIIT-H). He was Professor Emeritus at BITS-Pilani Hyderabad Campus during 2016. He was an Institute Professor from 2012 to 2016 and Professor & Microsoft Chair from 2006 to 2012 at IIIT-H. He was a Professor (1980 to 2006) and Head of the CSE Dept (1985 to 1989) at IIT Madras, a visiting Associate Professor at Carnegie-Mellon University (CMU), Pittsburgh, USA (1977 to 1980), and a member of the faculty at the Indian Institute of Science (IISc) Bangalore (1966 to 1978). He received BSc from Andhra University Visakhapatnam in 1961, and BE, ME and PhD from IISc Bangalore in 1964, 1966, and 1974, respectively. His research interests are in signal processing, speech, image processing and neural networks. He has published over 420 papers in these areas. He is the author of the book <strong>Artificial Neural Networks</strong>, published by Prentice-Hall of India in 1999. He has supervised 39 PhD and 42 MS theses at IISc, IITM and IIIT-H. He is a Fellow of the Indian National Academy of Engineering (INAE), a Fellow of the Indian National Science Academy (INSA), a Fellow of the Indian Academy of Sciences (IASc), a Fellow of the IEEE (USA) and a Fellow of the International Speech Communications Association (ISCA). He was the recipient of the 3rd IETE Prof.S.V.C.Aiya Memorial Award in 1996. He received the Prof.S.N.Mitra Memorial Award for the year 2006 from INAE. He was awarded the 2013 Distinguished Alumnus Award from IISc Bangalore. He was awarded <strong>The Sayed Husain Zaheer Medal (2014)</strong> of INSA. He received Prof. Rais Ahmed Memorial Lecture Award from the Acoustical Society of India in 2016. He was awarded Life Fellow of IIT Kharagpur in 2022. He was an Associate Editor for the IEEE Transactions on Audio, Speech and Language Processing during 2003-2006. He is currently an Associate Editor for the Journal of the Acoustical Society of America. He received Doctor of Science (Honoris Causa) from Jawaharlal Nehru Technological University Anantapur in February 2019. He was the General Chair for Interspeech2018 held in Hyderabad, India, during September 2018.  He was a visiting Professor at IIT Dharwad and at CMU Africa in Rwanda during 2019.  He was a Distinguished Professor at IIT Hyderabad during 2020 to 2023. Currently, he is an Adjunct Faculty at IIT Tirupati and Distinguished Adjunct Professor at IIIT Naya Raipur."
            },
            {
                time: "12:00 p.m - 1:00 p.m",
                title: "Invited Talk - A Multilingual Perspective to TTS Synthesis for Indian Languages.",
                speaker: "<strong>Dr. Hema A Murthy and Dr. Anusha Prakash</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>India has a rich linguistic diversity, with 1369 languages,\
                 including 22 official languages, excluding English. Despite a population of over one billion, only 74.04% \
                 of the population is literate. This underscores the need for the development of high-quality Indic speech\
                  synthesis systems to effectively engage the broader public. However, this task is challenging due to the \
                  limited availability of high-quality training data and the varying grapheme representations across different\
                   languages.In this talk, we will present two approaches to TTS synthesis for an unseen language: \
                   (1) We train multilingual systems based on language families to accommodate new languages that have \
                   limited or no TTS data (zero-shot). The goal is to leverage phonotactic similarities between languages \
                   within the same family. (2) We also study the effectiveness of zero-shot synthesis of text in an unseen \
                   language by modifying the grapheme-to-phoneme rules and using a non-native TTS system. This approach is \
                   motivated by the fact that languages form a dialect continuum, allowing for synthesis with a suitable \
                   monolingual TTS system.\
                   <br><br><strong>About Speakers: <br></strong><Strong>Dr. Hema A Murty</strong> received a bachelor’s degree from Osmania University, Hyderabad, India, in 1980, a master’s degree from McMaster University, Hamilton, Canada, in 1986, and a PhD degree from the Indian Institute of Technology (IIT) Madras, Chennai, India, in 1992. She is currently an Honorary Emeritus Professor at the Department of Computer Science and Engineering, IIT Madras, and a Distinguished Visiting Faculty at Shiv Nadar University, Chennai. Her research interests include speech processing, computer networks, music information retrieval, computational brain research, and other areas of machine learning and signal processing. She is a Fellow of Asia-Pacific Artificial Intelligence Association, 2023, Fellow of ISCA (International Speech Communication Association), 2022 and a Fellow of INAE (Indian National Academy of Engineering), 2017.  She was awarded the IBM faculty award in 2006.  She has been involved in various projects funded by the Government of India (GoI). She was the Chief Investigator of a consortium project to build text-to-speech (TTS) systems in 13 Indian languages. She is currently leading the Speech Technology efforts for the Natural Language Translation Mission funded by GoI. \
                   <br><br> <strong> Dr. Anusha Prakash </strong> received the B.E. \
                   degree in Electrical and Electronics Engineering from Visvesvaraya Technological University, Belagavi, \
                   India, in 2012, the M.S. degree in Applied Mechanics from the Indian Institute of Technology (IIT) Madras,\
                    Chennai, India, in 2017, and the Ph.D. degree in Electrical Engineering from IIT Madras in 2024. Her \
                    research interests include text-to-speech (TTS) synthesis, particularly from a multilingual perspective\
                 for low-resource Indian languages, and improving the quality of dysarthric speech. She has been involved in \
                 various Government-funded projects and was a part of the Speech Technology consortium for the National \
                 Language Translation Mission. She is currently an independent researcher working on TTS systems."
            },
            {
                time: "1:00 p.m - 02:30 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "2:30 p.m - 3:30 p.m",
                title: "Invited Talk - Advances in Deep Learning Models",
                speaker: "<strong>Dr. C. Chandra Sekhar</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>The talk presents an overview of deep learning models used for audio, image, video and text processing tasks. Stacked autoencoder and stacked restricted Boltzmann machines models are used for unsupervised pretraining of a deep feedforward neural network. The 2-dimensional deep convolutional neural networks (DCNNs) are mainly designed for image classification and image segmentation tasks. The 3-dimensional DCNNs are used for video classification tasks, and 1-dimensional DCNNs are used for audio and text processing tasks. Recurrent neural networks (RNNs) and Long Short-Term Memory (LSTM) networks are used for sequential pattern processing tasks in audio, video and text domains. Attention based models, namely transformers, are mainly explored for sequence-to-sequence mapping tasks such as machine translation. Combinations of DCNNs and RNNs or transformers have been explored for visual captioning, visual question answering and visual commonsense reasoning tasks. Generative adversarial networks (GANs) and variational autoencoders have been used for generation of images. Recently, diffusion models have been explored for generation or retrieval of different types of data such as audio, image, video and text data. <br><br> <strong>About Speaker: </strong> Prof. C. Chandra Sekhar received his B.Tech. degree in Electronics and Communication Engineering from Sri Venkateswara University, Tirupati, India, in 1984. He received his M.Tech. degree in Electrical Engineering and Ph.D. degree in Computer Science and Engineering from IIT Madras in 1986 and 1997, respectively. He was a Japanese Society for Promotion of Science (JSPS) post-doctoral fellow at Nagoya University, Nagoya, Japan, between May 2000 and May 2002. He was a Lecturer from 1989 to 1997, an Assistant Professor from 1997 to 2002,  an Associate Professor from 2004 to 2010, and is a Professor from  2010 in Department of Computer Science and Engineering.  His teaching interests are Pattern Recognition and Machine Learning, Deep Learning, and Computer Architecture. He received the “Srimathi Marti Annapurna Gurunath Award for Excellence in Teaching at IIT Madras” for the year 2016. His current research interests are in Visual Captioning, Deep Learning and Distance Metric Learning. He published about 135 papers in refereed journals and edited volumes, and in the proceedings of international and national conferences.  He supervised 9 Ph.D. theses and 18 M.S. theses. He is currently supervising 2 Ph.D. students and 1 M.S. student. He has been an investigator for 14 sponsored research projects.  He was a General Co-Chair of a premier International Conference, INTERSPEECH 2018, conducted under the aegis of International Speech Communication Association (ISCA) at Hyderabad in September, 2018."
            },

            {
                time: "3:30 p.m - 4:30 p.m",
                title: "Invited Talk - Representation Learning For Emotional Artificial Intelligence",
                speaker: "<strong>Dr. Sriram Ganapathy</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Though AI systems now excel at understanding and generating human languages, they are largely emotionally inept, thereby hindering their ability to engage in natural  interactions. This talk focuses on the frontier of artificial emotional intelligence in speech systems, addressing two key challenges: emotion recognition and generation. I will delve into how representation learning techniques impact both these areas. <br> First, I will describe our efforts on Content and Acoustic Representations for Emotions (CARE), a novel approach based on distillation based learning of speech representations. By capturing the subtle nuances of representing acoustic and textual contents of speech, CARE allows to better recognize the emotional classes of speech. <br> Next, I will discuss our recent work on zero-shot emotion conversion, where a system learns to transform the emotional tone of speech without any supervision. This task is  made possible through the power of disentangled and factorized representations of speech. <br>Finally, the talk will explore the application of these approaches to data from Indian languages, opening up the possibilities for building emotionally intelligent speech and language systems for Indian users. <br><br> <strong>About Speaker: </strong>Dr. Sriram Ganapathy is an Associate Professor at the Electrical Engineering, Indian Institute of Science, Bangalore, where he heads the activities of the Learning and Extraction of Acoustic Patterns (LEAP)  lab. He is also a visiting research scientist at Google DeepMind India, Bangalore. Prior to joining the Indian Institute of Science, he was a research staff member at the IBM Watson Research Center, Yorktown Heights from 2011 to 2015. He received his Doctor of Philosophy from the Center for Language and Speech Processing, Johns Hopkins University. He obtained his Bachelor of Technology from College of Engineering, Trivandrum, India and Master of Engineering from the Indian Institute of Science, Bangalore.  He has also worked as a Research Assistant in Idiap Research Institute, Switzerland from 2006 to 2008.  At the LEAP lab, his research interests include signal processing, machine learning methodologies for speech and speaker recognition and auditory neuroscience.  Dr. Ganapathy currently serves as the IEEE Sigport Chief Editor, nominated member of the IEEE Education Board, and functions as subject editor for Elsevier Speech Communication Journal. He is also a recipient of several awards including Department of Science and Technology (DST) Early Career Award in India, Pratiksha Trust Young Investigator Award, Department of Atomic Energy (DAE)  Young Scientist Award and Verisk Analytics AI Faculty Award."
            },
            
            {
                time: "04:30 p.m - 05:00 p.m",
                title: "Refreshment Break",
                speaker: "",
                venue: "Refreshment Area",
                description: "N/A"
            },
            
            {
                time: "5:00 p.m - 6:00 p.m",
                title: "Invited Talk - Assistive speech technologies",
                speaker: "<strong>Dr. P Vijayalakshmi</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },

            {
                time: "07:00 p.m onwards",
                title: "Ideas & Appetites",
                speaker: "",
                venue: "WIll be updated later",
                description: "Enjoy the journey. Chat with other bright minds, share your thoughts, and enjoy a delicious meal. It's the perfect recipe for making new connections!"
            },

            // Add more events for Day 1 as needed
        ]
    },
    day2: {
        date: "DECEMBER 10, 2024 (Tuesday)",
        events: [
            {
                time: "9:00 a.m - 9:30 a.m",
                title: "Invited Talk - Quantum Leap in Speech Recognition – Beyond GenAI and LLMs",
                speaker: "<strong>Prof. Nixon Patel</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong> Artificial intelligence's (AI), and its derivatives like the Generative AI and Large Language Models (LLMs), capabilities have significantly transformed speech technology in the past decade and a half. But an equally exciting innovation is anticipated to be an even bigger game changer in the industry: quantum computing. This advancing field in computer science uses the unique principles of quantum mechanics to address problems that lie beyond the capabilities of even the most sophisticated classical computers.Speech recognition systems, for instance, rely on recognizing patterns in sound, context, and language structures, which require immense computational power.Current classical methods involve comparing a voice input against massive phonetic and language pattern databases to determine the most accurate match, but quantum algorithms, using qubits in superposition, could compare and match these patterns more efficiently. This would significantly improve the speed and accuracy of transcription, making systems like virtual assistants or automated customer service more responsive and accurate. Quantum algorithms can also improve noise reduction and data compression techniques, making speech recognition more reliable in noisy environments.Furthermore, quantum computing could revolutionize machine learning models used for speech synthesis (converting text into realistic speech) and emotion detection (analyzing sentiment and emotional tone in speech).Finally, language can naturally be treated as a quantum process and, as a result, is subject to quantum computational benefits. Particular features of current Quantum Natural Language Processing (QNLP) include language-neutral but still fully interpretable representations—meaning-awareness well beyond current LLMs, which can substantially help with speech recognition—and structures that are intrinsically multimodal and can strongly support multimodal forms of speech technology for Indic languages!"
            },
            
            {
                time: "09:30 a.m - 10:30 p.m",
                title: "Pannel Discussion - Future direction of Speech Processing in Indian Languages",
                speaker: "",
                venue: "Peacock Hall",
                description: ""
            },
            {
                time: "10:30 a.m - 11:00 a.m",
                title: "Meet and Greet",
                speaker: "",
                venue: "Refreshment Area",
                description: "Snacks and beverages will be served. Time to network and recharge!"
            },

            {
                time: "11:00 a.m - 12:00 p.m",
                title: "Invited Talk - Multi-Lingual Audio Deepfake Detection Corpus",
                speaker: "<strong>Dr. Hemant A Patil</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong> Deepfakes are artificially generated fake media using deep learning (DL) methods. Recent study found that deepfakes are challenging to detect even for human listeners, however, machines can do better job in their detection. This talk present development of recent Multi-Lingual Audio Deepfake Detection Corpus (MLADDC) to boost the Audio DeepFake Detection (ADD) research. Existing datasets for ADD suffer from several limitations; in particular, they are limited to one or two languages. Proposed dataset contains 20 languages, which have been released in 4 Tracks (6 - Indian languages, 14 - International languages, 20 languages half-truth data, and combined data). Moreover, the proposed dataset has 400 K files (1,125+ hours) of data, which makes it one of the largest datasets. Deepfakes in MLADDC have been produced using advanced Deep Learning (DL) methods, such as HiFi- GAN and BigVGAN. Another novelty of this corpus lies in its sub-dataset, that has partial deepfakes (Half-Truth). We compared our dataset with various existing datasets, using cross-database method. For comparison, we also proposed baseline accuracy of 68.44%, and EER of 40.9% with MFCC features and CNN classifier (14 languages track only) indicating technological challenges associated with ADD task on proposed dataset. The talk will also discuss some of the open research challenges in this ADD research, more so, in the multilingual context. <br> <br> <strong>About Speaker: </strong>Dr. Hemant A. Patil received Ph.D. degree from the Indian Institute of Technology (IIT), Kharagpur, India, in July 2006. Since Feb. 2007, he has been a faculty member at DA-IICT Gandhinagar, India and developed Speech Research Lab recognized as ISCA Speech Labs (the ONLY such lab of its kind in India) at DA-IICT. Prof. Patil is member of ISCA, IEEE, IEEE Signal Processing Society, IEEE Circuits and Systems Society, EURASIP, APSIPA, an affiliate member of IEEE SLTC, and American Mathematical Society (AMS). He is regular reviewer for IEEE Signal Processing Magazine, IEEE Trans. Speech, Audio and Language Processing, Speech Communication, Elsevier, Computer Speech and Language, Elsevier, ICASSP, INTERSPEECH, EUSIPCO, APSIPA ASC, SPCOM, and PReMI. He has published/submitted around 350+ research publications in international conferences/journals/book chapters. He visited department of ECE, University of Minnesota, Minneapolis, USA (May-July, 2009) as short-term scholar. He has been associated (as PI) with three MeitY sponsored projects in ASR, TTS, and QbESTD. He was co-PI for DST sponsored project on India-Digital Heritage (IDH)-Hampi. His research interests include audio deepfake detection, voice liveliness detection, speech and speaker recognition, analysis of spoofing attacks, TTS, assistive speech technologies, such as infant cry and dysarthric speech classification and recognition. He has received DST Fast Track Award for Young Scientists for infant cry analysis. He has coedited four books with Dr. Amy Neustein (EIC, IJST Springer) with titles, Forensic Speaker Recognition (Springer 2011), Signal and Acoustic Modeling for Speech and Communication Disorders (DE GRUYTER, 2018), Voice Technologies for Speech Reconstruction and Enhancement (DE GRUYTER, 2020), and Acoustic Analysis of Pathologies from Infant to Young Adulthood (DE GRUYTER, 2020). Recently, he served as Associate Editor for IEEE Signal Processing Magazine (2021-2023).  Prof. Patil has also served as PRSG Member for three MeitY sponsored projects, namely, “Speech-to-Speech Translation & Performance Measurement Platform for Broadcast Speeches and Talks (e.g., Mann Ki Baat)”, “Indian Languages Speech Resources Development for Speech Applications”, and “Integration of 13 Indian Languages TTS Systems with Screen readers for Windows, Linux, and Android Platforms”. <br> Prof. Patil has taken a lead role in organizing several ISCA supported events@DA-IICT, such as summer/winter schools/CEP workshops (on theme as automatic speech recognition, speaker and language recognition, speech source modeling, text-to-speech synthesis, speech production-perception link, advances in speech processing) and progress review meetings for two MeitY consortia projects all at DA-IICT Gandhinagar. Dr. Patil has supervised 08 doctoral and 57 M.Tech. theses (all in speech processing area). Presently, he is supervising 01 doctoral and 01 master students. He is also co-supervising UG and masters students jointly as part of Samsung PRISM program at DA-IICT. Recently, he offered a joint tutorial with Prof. Haizhou Li (IEEE Fellow and ISCA Fellow) during Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA ASC) 2017, and INTERSPEECH 2018. He offered a joint tutorial with Prof. Heidiki Kawahara (IEEE Fellow and ISCA Fellow) on the topic, “Voice Conversion: Challenges and Opportunities,” during APSIPA ASC 2018, Honolulu, USA. He spent his Sabbatical Leave at Samsung R&D Institute, Bengaluru during May-Aug. 2019. He has been selected as APSIPA Distinguished Lecturer (DL) for 2018-2019, and he has 25+ APSIPA DLs in four countries, namely, India, Singapore, China, and Canada. Recently, he is selected as ISCA Distinguished Lecturer (DL) for 2020-2022, and delivered 25+ ISCA DLs in India, USA, and Malaysia."
            },
            
            {
                time: "12:00 a.m - 1:00 p.m",
                title: "Invited Talk - Recent Efforts for Automatic Speech Recognition (ASR) in Indian Languages",
                speaker: "<strong>Dr. S Umesh</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },

            {
                time: "1:00 p.m - 02:30 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },

            {
                time: "02:30 p.m - 03:30 p.m",
                title: "Invited Talk - Speech Processing using Deep Neural Networks (DNN)",
                speaker: "<strong>Dr. K Sri Rama Murthy</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            
            {
                time: "03:30 p.m - 04:30 p.m",
                title: "Invited Talk - Spoken Language Identification Techniques for Indian Languages",
                speaker: "<strong>Dileep A D</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "04:30 p.m - 05:00 p.m",
                title: "Snack Interval",
                speaker: "",
                venue: "Refreshment Area",
                description: "Its time to recharge and network with other participants."
            },

            {
                time: "05:00 p.m - 06:00 p.m",
                title: "Invited Talk - Securing the Audio Domain: Cyber Threats and Effective Mitigation Strategies",
                speaker: "<strong>Dr. Arun Sankar M S</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },

            {
                time: "06:30 p.m onwards",
                title: "Cultural Night",
                speaker: "",
                venue: "Will be updated later",
                description: "N/A"
            },

            // Add more events for Day 2 as needed
        ]
    },

    day3: {
        date: "DECEMBER 11, 2024 (Wednesday)",
        events: [
            /*{
                time: "9:00 a.m - 10:30 a.m",
                title: "Invited Talk - Are Indic languages  prosodically different?",
                speaker: "<strong>Dr. T Nagarajan</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },*/

            {
                time: "09:00 a.m - 10:00 a.m",
                title: "Industry Perspective Talk - Speech recognition in noisy environments: Focus on far field and call communications",
                speaker: "<strong>Vikram C M</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },
            {
                time: "10:00 a.m - 11:00 p.m",
                title: "Industry Perspective Talk - Development of Text to Speech Synthesis System for Santhali - A Low Resource Language",
                speaker: "<strong>Sri Pranaw Kumar</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Santali is the language of the Munda sub-family of Austroasiatic languages, and it is spoken by around 73 lac people (as per the census of 2011) in India, primarily in Jharkhand, Bengal, Odisha, Bihar, and Assam states. Santali language was added to the Eighth schedule in the year 2004, its script Ol Chiki was added to the Unicode Standard in April, 2008, and in December 2013, the University Grants Commission of India decided to introduce the language in the National Eligibility Test to allow lecturers to use the language in colleges and universities. After these decisions, a lot of developments were made towards Santhali content creation, awareness building, providing education & training, etc. However, Santali is an extremely low-resource language and hardly any major NLP tools and technologies like Machine Translation, TTS, ASR, OCR, etc are available. Therefore, there is a lack of systematic study of the Santali language and its script Ol Chiki from the NLP point of view. This talk covers the study and analysis of the Santali language from the point of view of the development of Text to Speech synthesis system which includes steps and challenges involved in Text data preparation, speaker selection, speech data recording, development of the letter-to-sound rule, converting Devanagari script into Olchiki, special peculiarities of the language, etc.  <br> <br> <strong> About Speaker: </strong> Pranaw Kumar is currently working as a Scientist 'E' /Joint Director at the Centre for Development of Advanced Computing (C-DAC), Mumbai. He has been associated with CDAC Mumbai for the last 16 years. His research interests include language and speech technologies. He works for Text-to-Speech Synthesis System (TTS), Automatic Speech Recognition (ASR) system for Indian Languages, and related applications. He has been involved in the development of Marathi, Odia, and Indian English TTS Systems, Hindi, Marathi, Odia, and English ASR Systems,  and various applications like TTS browser plugin, SMS Reader, TTS building Toolkit (TBT), Framework to integrate TTS system into websites, Speech Enabled IVRS System, Speech Enabled Multilingual chatbot, Speech Enabled Examination System for Visually Impaired Persons, etc. Currently he is Principal Investigator of a consortium based sub project  'Speech technologies in Indian languages' under the Project titled 'National Language Translation Mission (NLTM) : BHASHINI' for Mumbai centre. He was Principal Investigator of following two projects for Mumbai Centre: Natural Language Translation Mission - Automatic Speech Recognition in Indian English, Tamil, Hindi, and Text to Speech Synthesis for conversational speech in Indian languages. <br> Integration of 13 Indian Language TTS Systems with screen-readers for Windows, Linux, and Android platforms"
            },
            
            {
                time: "11:30 a.m - 11:30 a.m",
                title: "Mingling Moment",
                speaker: "",
                venue: "Refreshment Area",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },

            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Industry Perspective Talk - Attentive Multilingual Speech Encoder for Zero-Prior ASR",
                speaker: "<strong>Dr. Debamalya Chakraborty </strong>",
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
                title: "Invited Talk - Learning for machines: Insights from acoustic analyses",
                speaker: "<strong>Priyankoo Sarmah</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>Will be updated soon"
            },

            {
                time: "03:00 p.m - 04:00 p.m",
                title: "Industry Perspective Talk - Advancing Text-to-Speech Technology for Indic Languages: Motivation, Architectural Frameworks, and Performance Evaluation",
                speaker: "<strong>Dr. Sreeram Ganji</strong>",
                venue: "Peacock Hall",
                description: "<strong>Abstract: </strong>This talk explores advancements in Text-to-Speech (TTS) technology for Indic languages, focusing on motivation, architectural innovations, and evaluation methodologies. Indic languages, with their phonetic diversity, complex scripts, and widespread code-switching, demand unique solutions. The session covers cutting-edge topics such as speaker adaptation for personalized voice synthesis, style transfer for replicating diverse speaking styles, and expressive TTS for conveying emotions and intent. It also highlights how neural architectures, phoneme-based synthesis, and transfer learning address low-resource challenges while enhancing naturalness and intelligibility. Attendees will gain insights into building inclusive and scalable TTS systems tailored for India’s multilingual digital landscape. <br><br> <strong>About Speaker: </strong> I currently lead the Speech Team at Reliance Jio AICoE, where I spearhead the development of advanced speech and voice-based solutions tailored for diverse business applications. I hold an M.Tech and Ph.D. from IIT Guwahati, with my research focusing on Speech-to-Text (STT), Text-to-Speech (TTS), Large Language Models (LLMs), speech processing, code-switching, and machine/deep learning. In a previous role as an Assistant Project Engineer, I played a key role in a government-sponsored project titled, <strong>Speech-based Access to Agricultural Commodity Prices and Weather Information in 11 Indian Languages/Dialects</strong>. In addition to applied work, my research has been published in prestigious journals and presented at renowned conferences."
            },

            {
                time: "04:00 p.m - 04:30 p.m",
                title: "Snack Interval",
                speaker: "",
                venue: "Refreshment Area",
                description: "Have a break and network with other participants."
            },

            {
                time: "04:30 p.m onwards",
                title: "Poster Presentation by Research Scholars",
                speaker: "",
                venue: "SAC Hall, R-Block, Ground Floor",
                description: "Get insights on the ground breaking research work done by the research scholars in the field of Speech Processing."
            },

            
            // Add more events for Day 3 as needed
        ]
    },

    day4: {
        date: "DECEMBER 12, 2024 (Thursday)",
        events: [
            {
                time: "9:00 a.m - 10:00 a.m",
                title: "Invited Talk - Implicit Processing of Speech for Spoken Language Diarization",
                speaker: "<strong>Dr. Jagabandhu Mishra</strong>",
                venue: "Peacock Hall",
                description: "Spoken language diarization (LD) involves the automatic annotation of monolingual segments within a code-switched (CS) speech signal. CS occurs when a speaker alternates between languages during a conversation. Studies indicate that approximately 43% of the world's population is bilingual, meaning that natural conversations often include bilingual or multilingual utterances. Research suggests that the performance of speech-based systems declines significantly when handling CS utterances. One potential solution is to incorporate LD as a preprocessing module to mitigate this issue. In general, either of the languages present in the CS utterance (assume native Indian languages) is resource-scarce in nature. Hence the use of implicit approaches is preferable over explicit (need linguistic resources). However, implementing these approaches presents several challenges. This presentation will highlight the progress made in addressing these challenges and the opportunities for further advancements. <br> <br> <strong> About Speaker: </strong>Dr. Jagabandhu Mishra is currently, working as a post-doctoral researcher in the School of Computing of the University of Eastern Finland, Finland. His research interests include speaker and language recognition, speech recognition, and speech signal analysis. He obtained his Ph. D. from the Dept. of Electrical, Electronics and Communication Engineering, Indian Institute of Technology Dharwad, India, in the year 2024. He received his M. Tech. degree in Communication Engineering from the National Institute of Technology Nagaland, India, in the year 2018. He received his B. Tech. degree in Electronics and Telecommunication Engineering from BPUT Odisha, India, in the year 2015."
            },
            {
                time: "10:00 a.m - 11:00 a.m",
                title: "Invited Talk - Processing of speech recorded from stroke patients",
                speaker: "<strong>Dr. Govind D</strong>",
                venue: "Peacock Hall",
                description: "This talk examines the complex challenges and methodologies involved in analyzing speech patterns of stroke patients, exploring how advanced signal processing and machine learning techniques can help understand and quantify speech impairments. The discussion covers innovative approaches to processing dysarthric speech, tracking recovery patterns, and developing automated assessment tools, ultimately contributing to better rehabilitation strategies and clinical outcomes for stroke survivors with speech disorders. <br> <br> <strong> About Speaker: </strong> Dr. Govind D has joined KL university as a Professor in Department Computer Science and Engineering in March 2021. He has completed his Ph.D. in the area of speech signal processing from the Indian Institute of Technology  Guwahati in 2013. He was working at the center for computational engineering and networking at Amrita Vishwa Vidyapeetham for nearly 9 years from 2012. His areas of interest include speech synthesis, speech recognition, emotion recognition, image processing, bio medical signal processing etc.. He has published more than 60  research publications including the renowned conferences in the area of speech processing, like INTERSPEECH, ICASSP, Speech prosody, etc. and other reputed journals. He  has  been involved  in various  Govt. of India sponsored  funded projects   by ICMR, SERB, MEITY, DST etc.. He has developed and successfully deployed different industrial consultancy projects in the areas of speech recognition and speech synthesis. He has  successfully supervised  and graduated 4 Ph.D. students  and  guided  more than 30 PG  dissertations."
            },
            {
                time: "11:00 a.m - 11:30 a.m",
                title: "Mingling Moment",
                speaker: "",
                venue: "Refreshment Area",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Invited Talk  - Approaches to recording and processing of voice samples of neurological patients",
                speaker: "<strong>Dr. Rajeev Aravindakshan</strong>",
                venue: "Peacock Hall",
                description: "This talk addresses the specialized methodologies and considerations required when collecting and analyzing voice samples from individuals with neurological conditions. The discussion explores crucial aspects of data collection protocols, environmental controls, and advanced signal processing techniques tailored for impaired speech patterns. From managing patient fatigue and varying symptom severity to developing robust analysis frameworks, the talk examines how these approaches contribute to better understanding of neurological conditions and their impact on speech, ultimately advancing both diagnostic capabilities and treatment strategies.\
                <br><br><strong>About Speaker: </strong>Dr. Rajeev Aravindakshan is a distinguished Professor and Head of the Department of Community and Family Medicine at AIIMS Mangalagiri in Andhra Pradesh, bringing over 30 years of extensive teaching experience. Throughout his illustrious career, he has served in notable institutions like Kasturba Medical College, Mangalore and Pushpagiri Institute of Medical Sciences, Tiruvalla, Kerala, holding significant positions including Vice Principal at PIMS&RC and Associate Director of Clinical Research at KMC, Mangalore. His academic contributions are remarkable, with more than 100 publications in reputed national and international journals and active involvement in numerous research projects. Dr. Aravindakshan holds several prestigious roles, including being the Faculty In-charge of IT Cell and a Member of the Research Advisory Council at AIIMS Mangalagiri, a Member of the PhD Board of Studies at NTR Health University of Andhra Pradesh, and a Member of the Editorial Board for the Journal of Research in Medical Education and Ethics (JRMEE). His professional excellence has been recognized through notable awards, such as the Best Poster Award at the First International Conference of Family Medicine in Muscat, Oman, in 2009, and the Appreciation for Excellence by the Association of Family Physicians of India (Andhra Pradesh/Telangana Branch) in 2024. With a keen interest in clinical research, application of IT in medicine, and e-learning, Dr. Aravindakshan has consistently organized and served as a resource person in various national and international workshops and conferences, demonstrating his commitment to medical education and research."
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
                title: "Invited Talk - Insights into Speech Disorders: Bridging Research and Practice",
                speaker: "<strong>Dr. Rakesh U K</strong>",
                venue: "Peacock Hall",
                description: "This talk explores the vital intersection between clinical research and practical applications in understanding and treating speech disorders. The discussion delves into cutting-edge research findings on various speech pathologies, examining how these insights inform therapeutic interventions, diagnostic tools, and technological solutions. By connecting laboratory discoveries with clinical practice, the talk highlights innovative approaches that enhance assessment accuracy, treatment effectiveness, and quality of life for individuals with speech disorders.\
                <br><br><strong>About Speaker: </strong><strong>Dr. U K RAKESH</strong> is an Associate Professor and Head of the Department of General Medicine at AIIMS Mangalagiri, holding qualifications of MBBS and MD in General Medicine. His professional interests span a diverse range of medical domains, including problem-solving in clinical medicine, investigating fever of unknown origin, analyzing metabolic syndromes, researching rare diseases, exploring neurological disorders, and studying medical technologies. Dr. Rakesh maintains active memberships in several prestigious medical associations, which include the Association Physicians of India (API), Clinical Infectious Diseases Society (CIDS), Society of Antimicrobial Stewardship Practices in India (SASPI), Epidemiology Foundation of India (EPI), and the International Society For Renal Research. His research portfolio is robust, encompassing projects such as stroke registry, microbiome studies in stroke, speech analysis in stroke patients, critical care research, infections, and medical technologies. Additionally, he has contributed numerous research articles to various national and international journals, demonstrating his commitment to advancing medical knowledge and clinical understanding."
            },
            {
                time: "03:00 p.m - 04:00 p.m",
                title: "Round Table Discussion",
                speaker: "<strong></strong>",
                venue: "Peacock Hall",
                description: "Will be updated soon"
            },
            {
                time: "04:30 p.m - 05:30 p.m",
                title: "Veledictory Function",
                speaker: "",
                venue: "Peacock Hall",
                description: "N/A"
            },
            {
                time: "05:30 p.m - 06:00 p.m",
                title: "Hi Tea",
                speaker: "",
                venue: "C Block Lobby",
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
                                                <p style="text-align: justify !important;">${event.description}</p>
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


document.addEventListener('click', function(event) {
    // Check if the clicked element is an anchor tag
    const link = event.target.closest('a');
    
    if (link && !link.closest('.main_nav-bar')) {
        // Check if href is empty or just a placeholder
        const href = link.getAttribute('href');
        if (!href || href.trim() === '' || href === '#' || href === 'javascript:void(0)') {
            // Prevent default link behavior
            event.preventDefault();
            
            // Optional: Add a visual indication that the link is disabled
            link.style.pointerEvents = 'none';
            link.style.opacity = '0.5';
        }
    }
});