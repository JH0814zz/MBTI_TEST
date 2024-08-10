// 질문 데이터
const questions = [
    { q: "친구들과 시간을 보내는 것을 좋아한다. / 혼자 시간을 보내는 것을 좋아한다.", a: ["친구들과 시간을 보내는 것을 좋아한다.", "혼자 시간을 보내는 것을 좋아한다."], t: "EI" },
    { q: "파티에서 에너지를 얻는다. / 조용한 환경에서 에너지를 얻는다.", a: ["파티에서 에너지를 얻는다.", "조용한 환경에서 에너지를 얻는다."], t: "EI" },
    { q: "낯선 사람과 쉽게 대화할 수 있다. / 낯선 사람과 대화하는 것이 어렵다.", a: ["낯선 사람과 쉽게 대화할 수 있다.", "낯선 사람과 대화하는 것이 어렵다."], t: "EI" },
    { q: "다른 사람들과 협력하는 것이 편하다. / 혼자 일하는 것이 더 편하다.", a: ["다른 사람들과 협력하는 것이 편하다.", "혼자 일하는 것이 더 편하다."], t: "EI" },
    { q: "대화에서 주도권을 잡는다. / 대화에서 듣는 편이다.", a: ["대화에서 주도권을 잡는다.", "대화에서 듣는 편이다."], t: "EI" },
    { q: "세부 사항에 주목하는 편이다. / 전체적인 그림을 보는 편이다.", a: ["세부 사항에 주목하는 편이다.", "전체적인 그림을 보는 편이다."], t: "SN" },
    { q: "현재에 집중하는 편이다. / 미래를 계획하는 편이다.", a: ["현재에 집중하는 편이다.", "미래를 계획하는 편이다."], t: "SN" },
    { q: "실제 경험을 선호한다. / 추상적인 아이디어를 선호한다.", a: ["실제 경험을 선호한다.", "추상적인 아이디어를 선호한다."], t: "SN" },
    { q: "사실을 중시한다. / 직관을 중시한다.", a: ["사실을 중시한다.", "직관을 중시한다."], t: "SN" },
    { q: "현실적인 접근을 선호한다. / 창의적인 접근을 선호한다.", a: ["현실적인 접근을 선호한다.", "창의적인 접근을 선호한다."], t: "SN" },
    { q: "논리적으로 결정을 내린다. / 감정적으로 결정을 내린다.", a: ["논리적으로 결정을 내린다.", "감정적으로 결정을 내린다."], t: "TF" },
    { q: "사실과 데이터를 중요시한다. / 사람들의 감정을 중요시한다.", a: ["사실과 데이터를 중요시한다.", "사람들의 감정을 중요시한다."], t: "TF" },
    { q: "공정한 평가를 중시한다. / 동정심을 중시한다.", a: ["공정한 평가를 중시한다.", "동정심을 중시한다."], t: "TF" },
    { q: "비판적인 피드백을 수용할 수 있다. / 비판적인 피드백에 민감하다.", a: ["비판적인 피드백을 수용할 수 있다.", "비판적인 피드백에 민감하다."], t: "TF" },
    { q: "논쟁에서 이기는 것이 중요하다. / 논쟁에서 사람들의 감정을 상하지 않는 것이 중요하다.", a: ["논쟁에서 이기는 것이 중요하다.", "논쟁에서 사람들의 감정을 상하지 않는 것이 중요하다."], t: "TF" },
    { q: "계획을 세우고 따르는 것을 좋아한다. / 유연하게 계획을 변경하는 것을 좋아한다.", a: ["계획을 세우고 따르는 것을 좋아한다.", "유연하게 계획을 변경하는 것을 좋아한다."], t: "JP" },
    { q: "정돈된 환경을 선호한다. / 즉흥적인 환경을 선호한다.", a: ["정돈된 환경을 선호한다.", "즉흥적인 환경을 선호한다."], t: "JP" },
    { q: "마감 기한을 엄수한다. / 마감 기한에 유연하다.", a: ["마감 기한을 엄수한다.", "마감 기한에 유연하다."], t: "JP" },
    { q: "정해진 일정에 따라 움직인다. / 그때그때 상황에 따라 움직인다.", a: ["정해진 일정에 따라 움직인다.", "그때그때 상황에 따라 움직인다."], t: "JP" },
    { q: "결정을 빨리 내린다. / 결정을 미루는 편이다.", a: ["결정을 빨리 내린다.", "결정을 미루는 편이다."], t: "JP" }
];

// 질문을 HTML에 동적으로 생성
function generateQuestions() {
    const questionsContainer = document.getElementById('questions');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question fade-in';
        questionDiv.style.animationDelay = `${index * 0.1}s`;
        questionDiv.innerHTML = `
            <p>Q${index + 1}: ${q.q}</p>
            <div class="answer">
                <label><input type="radio" name="q${index}" value="${q.t[0]}"> ${q.a[0]}</label>
                <label><input type="radio" name="q${index}" value="${q.t[1]}"> ${q.a[1]}</label>
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

// 폼 제출 시 결과 계산 및 출력
function submitForm() {
    const form = document.getElementById('mbtiForm');
    const formData = new FormData(form);
    const result = {E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0};
    
    formData.forEach((value, key) => {
        if (key !== 'name') {
            result[value]++;
        }
    });

    const mbtiType = [
        result.E > result.I ? 'E' : 'I',
        result.S > result.N ? 'S' : 'N',
        result.T > result.F ? 'T' : 'F',
        result.J > result.P ? 'J' : 'P'
    ].join('');

    const userName = document.getElementById('name').value;
    const resultArea = document.getElementById('resultArea');
    const mbtiLink = `https://www.16personalities.com/ko/성격유형-${mbtiType.toLowerCase()}`;

    resultArea.innerHTML = `
        <h3>결과보기</h3>
        <p>${userName}님의 MBTI 검사 결과는 <strong>${mbtiType}</strong>입니다.</p>
        <p>자세한 사항은 <a href="${mbtiLink}" target="_blank">여기</a>에서 확인하실 수 있습니다.</p>
    `;
}
