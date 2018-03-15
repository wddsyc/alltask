# 机器学习 Machine Learning

## Hello World

安装 `scikit-learn`
```bash
$ pip3 install --upgrade scipy
$ pip3 install --upgrade scikit-learn
```

NBA 篮球运动员身高体重与场上位置的关系

| 球员         | 身高 | 体重 | 位置         |
|-------------|-----|------|-------------|
| 斯蒂芬·库里   | 191 |  84  | 后卫 Guard   |
| 克莱·汤普森   | 201 |  93  | 后卫 Guard   |
| 凯文·杜兰特   | 211 | 107  | 前锋 Forward |
| 勒布朗·詹姆斯 | 203 | 113  | 前锋 Forward |

通过 `scikit-learn` 提供的决策树分类器(DecisionTreeClassifier)根据球员的身高和体重判断其场上位置

```python
from sklearn import tree

features = [[191, 84], [201, 93], [211, 107], [203, 113]]
labels = ['Guard', 'Guard', 'Forward', 'Forward']

clf = tree.DecisionTreeClassifier()
clf = clf.fit(features, labels)

print(clf.predict([[191, 88], [208, 114]]))   # ['Guard' 'Forward']
```

## 视频教程
* [斯坦福大学 CS231n: Convolutional Neural Networks for Visual Recognition](https://www.youtube.com/playlist?list=PLC1qU-LWwrF64f4QKQT-Vg5Wr4qEE1Zxk) [课件地址](http://cs231n.stanford.edu/slides/2017/)
* [Hello World - Machine Learning Recipes #1](https://www.youtube.com/watch?v=cKxRvEZd3Mw&t=312s)
* [Visualizing a Decision Tree - Machine Learning Recipes #2](https://www.youtube.com/watch?v=tNa99PG8hR8)

## 参考链接
* https://sourcedexter.com/amazing-tensorflow-github-projects
