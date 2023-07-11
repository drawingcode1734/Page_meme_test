// 타이틀, 페이지
const titleContainer = document.querySelector(".title-container");
const questionContainer = document.querySelector(".question-container");
const titleBtn = document.querySelector("#startBtn");

// 문제 요소 넣을 곳
const question_title = document.querySelector("#question_title");
const question_content = document.querySelector("#question_content");
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector("#b");
const question_number = document.querySelector("#question_number");

// 프로그레스 바
const pro = document.querySelector(".progress-bar");

// 결과 관련
const result_title = document.querySelector("#result-title");
const result_explain = document.querySelector("#result-explain")
const result_image = document.querySelector("#result-img")
const resultContainer = document.querySelector(".result-container");

const know = document.querySelector("#know");

let num = 1;


titleBtn.addEventListener('click', ()=>{ // 클릭하면 문제 페이지 나타나게
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'flex';
    updateQuestion();
});

const q = { // 질문은 딕셔너리 형태로 저장됨
    1: {
        "title": "문제 1번",
        "content" : "나는 오우예씨몬~ 이라는 말을",
        "A": "안다",
        "B": "모른다"
    },

    2: { "title": "문제 2번", "content" : "다음 중 괄호 안에 들어갈 벌레는?<br>엄마 내가 (  )가 되면 어떻게 할 거야?", "A": "바퀴벌레", "B": "곱등이"},
    3: {"title": "문제 3번", "content" : `"너... 뭐 돼?"라는 밈을 만든 유튜버는?`, "A": "레오제이", "B": "랄랄"},
    4: {"title": "문제 4번", "content" : '"누가 이렇게 예쁘게 낳았어?"', "A": "엄마엄마가", "B": "아빠아빠가"},
    5: {"title": "문제 5번", "content" : "'나문희의 첫사랑'으로 들리는 곡의 원곡 제목은?", "A": "바나나 쉐이크", "B": "딸기 쉐이크"},
    6: {"title": "문제 6번", "content" : '주급을 미리 줄 수 있냐는 알바생의 문자에<br>"X발 당연이 줄 수있지 나 까먹을 수 있으니 그때 문자한번 다시다오^^~" 라고 답장한 사장님은 무슨 가게를 했는가?', "A": "편의점", "B": "피시방"},
    7: {"title": "문제 7번", "content" : '"우린 이것을 얼음이라 부르기로 약속했어요" 밈을 만든 유튜버의 이름은?', "A": "선바", "B": "침착맨"},
    8: {"title": "문제 8번", "content" : '"김세정... 몸매 노래 얼굴 다가진여자... 하지만 강릉함씨 32대손인 나 ○○○는 가지지 못했지"에서 ○○○ 안에 들어갈 이름은?', "A": "함필규", "B": "함필주"},
    9: {"title": "문제 9번", "content" : '"난 니가 참 좋아<br>근데! 니가 너무 싫어...<br>하지만! 널 사랑해<br>그러나! 널 미워해...<br>however! 널 갖고 싶어<br>but! I hate you...<br>nevertheless! 너와 평생 함께하고 싶어<br>진짜... 내 마음은 뭘까?"<br><br>이 밈을 원작자 정재형이 직접 보여준 아이돌은?', "A": "허윤진", "B": "안유진"},
    10: {"title": "문제 10번", "content" : "승헌쓰의 충성송에 맞춰서 함께 춤췄던 아이돌 그룹은?", "A": "르세라핌", "B": "에스파"}

}

const result = {
    "a_grade" : {
        "type" : "도파민 중독자들의 수장",
        "explain" : "이 시대의 진정한 밈 박사!<br>그런데 혹시 본인이 던진 밈에 <br>사람들이 몰라서 무반응이지는 않나요?<br>마 니 인터넷 중독이다....",
        "img" : "image/a_grade.jpg"
    },

    "b_grade" : {"type" : "밈 대부분을 알아요! 인싸!", "explain" : "sns를 끼고 사는 당신,<br>유행에 뒤쳐지지 않는군요!<br>사람들의 웃음을 담당하는 나,<br>제법 젠틀해요", "img" : "image/b_grade.png"},

    "c_grade" : {"type" : "조금 알긴 아는데... 인싸는 아니고 그럴싸?", "explain" : "혹시 sns와 유행에 별 관심이 없었나요?<br>그래도 몇 개는 알고 계시는 걸 보니<br>친구들이 알려주었나 봐요.<br>공부해서 분발하도록 해요!", "img" : "image/c_grade.jpg"},

    "d_grade" : {"type" : "응애 나 아무고토 몰라요", "explain" : "혹시 방금 태어나셨나요?<br>아니면 그저 갓반인의 삶을 살고 있는지도...<br>발전 가능성이 무궁무진해요!", "img" : "image/d_grade.png"}

}


function updateQuestion() { // 질문페이지 바뀔 때마다 실행되어야.
    if(num === 11) { // num이 11 되면 결과 페이지로
        questionContainer.style.display = 'none'
        resultContainer.style.display = 'flex'

        if(know.value <= 3) {
            grade = "d_grade"
        } else if(know.value <= 6) { 
            grade = "c_grade"
        } else if(know.value <= 8) {
            grade = "b_grade"
        } else {grade = "a_grade"}

        result_title.innerHTML = result[grade].type;
        result_explain.innerHTML = result[grade].explain;
        result_image.setAttribute('src', result[grade].img) 

    } else { // q에 저장된 요소(문제) 불러옴
        pro.setAttribute('style', `width : calc(100/10*${num}%);`); // 프로그레스바 변화
        question_title.innerHTML = q[num].title;
        question_content.innerHTML = q[num].content;
        aBtn.innerHTML = q[num].A; // 안다 값
        bBtn.innerHTML = q[num].B; // 모른다 값
        question_number.innerHTML = `${num}/10`;
        num++; // num에 1 카운트
    }
}

// aBtn 눌렸을 때만 카운트
aBtn.addEventListener('click', ()=>{
    let yes = parseInt(know.value); // know값을 int 형태로 받아옴
    know.setAttribute('value', yes+1); // 지정된 요소의 속성 값 업데이트
    updateQuestion(); // 질문페이지 바뀜
});

bBtn.addEventListener('click', ()=>{
    updateQuestion();
});