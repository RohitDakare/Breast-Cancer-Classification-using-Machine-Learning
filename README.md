# Breast Cancer Classification using Machine Learning

This project focuses on building a machine learning model to classify breast cancer tumors as either **malignant** or **benign**. The classification is based on 30 diagnostic features computed from a digitized image of a fine needle aspirate (FNA) of a breast mass.

## Project Overview

The goal of this project is to create a reliable predictive model that can assist in the early diagnosis of breast cancer. The project utilizes a **Logistic Regression** model, a well-established algorithm for binary classification tasks. The entire workflow, from data loading and preprocessing to model training and evaluation, is documented in the `Project_19_Breast_Cancer_Classification_using_Machine_Learning.ipynb` notebook.

## Dataset

The model is trained on the **Breast Cancer Wisconsin (Diagnostic) Dataset**, which is included in the `scikit-learn` library. 

- **Number of Instances**: 569
- **Number of Attributes**: 30 numeric, predictive attributes and the class.
- **Class Distribution**: 212 Malignant, 357 Benign.

The features describe characteristics of the cell nuclei present in the image, such as radius, texture, perimeter, and area.

## Model Performance

The Logistic Regression model was trained and evaluated, achieving the following accuracy:

- **Training Data Accuracy**: 98.9%
- **Test Data Accuracy**: 97.3%

This high level of accuracy indicates that the model is effective in distinguishing between malignant and benign tumors based on the provided features.

## How to Run the Project

To run this project, you will need to have Python and Jupyter Notebook installed. You can follow these steps:

1.  **Clone the repository or download the project files.**
2.  **Install the required dependencies:**

    ```bash
    pip install numpy pandas scikit-learn matplotlib seaborn
    ```

3.  **Open the Jupyter Notebook:**

    ```bash
    jupyter notebook Project_19_Breast_Cancer_Classification_using_Machine_Learning.ipynb
    ```

4.  **Run the cells** in the notebook to see the data analysis, model training, and evaluation process.

## Frontend Plan

A plan for a user-friendly web interface has been created in `frontend.md`. The frontend will allow users to input the 30 required features and get an instant prediction from the trained model. The design will be minimal, visually appealing, and responsive.
