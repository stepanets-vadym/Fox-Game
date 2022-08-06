// React
import classNames from 'classnames';
import { Formik, FormikHelpers as FormikActions } from 'formik';
import { useEffect, useState } from 'react';

// Components & elements

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './AdminPage.module.scss';
import axios from 'axios';
import Label from 'elements/label/Label';
import TextArea from 'elements/textArea/TextArea';
import { Category } from 'interfaces/Category.types';
import { apiClient } from 'API/GameServis';
import Loader from 'elements/loader/Loader';

interface FormValues {
  shopimage: string;
  sliderGrandImage: string;
  sliderSmallImage: string;
  gamePageImage: string;
  title: string;
  sliderTitle: string;
  grandLogo: string;
  smallLogo: string;
  sliderLogo: string;
  genres: string;
  category: string[];
  price: number;
  sliderDescription: string;
  gamePageDescription: string;
  videoLink: string;
  iframeVideo: string;
}

const Erorrs = {
  REQIRED: 'this field is required',
};

const AdminPage = () => {
  // Start Value Inputs
  const initialValues: FormValues = {
    shopimage: '',
    sliderGrandImage: '',
    sliderSmallImage: '',
    gamePageImage: '',
    title: '',
    sliderTitle: '',
    grandLogo: '',
    smallLogo: '',
    sliderLogo: '',
    genres: '',
    category: [],
    price: 0,
    sliderDescription: '',
    gamePageDescription: '',
    videoLink: '',
    iframeVideo: '',
  };

  // Validate Form
  const validate = (values: FormValues) => {
    // може бути безмежна кількість ключів
    const errors: { [key: string]: string } = {};
    // Password Validate
    if (!values.shopimage) {
      errors.shopimage = Erorrs.REQIRED;
    }

    if (!values.gamePageImage) {
      errors.gamePageImage = Erorrs.REQIRED;
    }
    if (!values.title) {
      errors.title = Erorrs.REQIRED;
    }
    if (!values.grandLogo) {
      errors.grandLogo = Erorrs.REQIRED;
    }
    if (!values.category) {
      errors.category = Erorrs.REQIRED;
    }
    if (!values.genres) {
      errors.genres = Erorrs.REQIRED;
    }
    if (!values.price) {
      errors.price = Erorrs.REQIRED;
    } else if (values.price <= 0) {
      errors.price = 'price shoul be nore than 0';
    }
    if (!values.gamePageDescription) {
      errors.gamePageDescription = Erorrs.REQIRED;
    }

    if (!values.videoLink) {
      errors.videoLink = Erorrs.REQIRED;
    }

    if (!values.iframeVideo) {
      errors.iframeVideo = Erorrs.REQIRED;
    }

    return errors;
  };

  // Вибір категорії гри з беку
  const [loading, setLoading] = useState<boolean>(false);

  const [category, setCategory] = useState<Category[]>([]);

  const fetchCategory = async () => {
    setLoading(true);
    const response = await apiClient.get<Category[]>('/categorys/getAll');
    setCategory(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  // сабмит
  const submit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikActions<FormValues>
  ) => {
    setLoading(true);

    // Додавання гри у магазин
    // const apiUrl = 'http://localhost:8080/api/games/addGames';
    const apiUrl = 'https://final-project-bt.herokuapp.com/api/games/addGames';
    await axios
      .post(apiUrl, values, {})
      .then((res) => {
        setSubmitting(false);
        resetForm();
        console.log(res);
        setLoading(false);
      })
      .catch((errors) => {
        console.log(errors);

        setSubmitting(false);
        resetForm();
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      // AdminPage
      <div className={styles.AdminPage}>
        <div className={classNames(styles.wrapper, globalStyle.container)}>
          <h2 className={styles.title}>Додати гру в магазин</h2>
          <div className={styles.formBlock}>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={submit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formInputBlock}>
                    <Label
                      value={values.shopimage}
                      text={'Shop Image - this field is required'}
                      name={'shopimage'}
                      type={'text'}
                      placeholder={'you need to insert a link to the image'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.shopimage && touched.shopimage
                          ? errors.shopimage
                          : ''
                      }
                    />

                    <Label
                      value={values.sliderGrandImage}
                      text={'Slider Grand Image - this field is optional'}
                      name={'sliderGrandImage'}
                      type={'text'}
                      placeholder={'you need to insert a link to the image'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.sliderGrandImage && touched.sliderGrandImage
                          ? errors.sliderGrandImage
                          : ''
                      }
                    />
                    <Label
                      value={values.sliderSmallImage}
                      text={'Slider Small Image  - this field is optional'}
                      name={'sliderSmallImage'}
                      type={'text'}
                      placeholder={'you need to insert a link to the image'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.sliderSmallImage && touched.sliderSmallImage
                          ? errors.sliderSmallImage
                          : ''
                      }
                    />
                    <Label
                      value={values.gamePageImage}
                      text={'Game Page Image - this field is required'}
                      name={'gamePageImage'}
                      type={'text'}
                      placeholder={'you need to insert a link to the image'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.gamePageImage && touched.gamePageImage
                          ? errors.gamePageImage
                          : ''
                      }
                    />

                    <Label
                      value={values.grandLogo}
                      text={'Grand Logo - this field is required'}
                      name={'grandLogo'}
                      type={'text'}
                      placeholder={'you need to insert a link to the image'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.grandLogo && touched.grandLogo
                          ? errors.grandLogo
                          : ''
                      }
                    />
                    <Label
                      value={values.sliderLogo}
                      text={'Slider Logo - this field is optional'}
                      name={'sliderLogo'}
                      type={'text'}
                      placeholder={'you need to insert a link to the image'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.sliderLogo && touched.sliderLogo
                          ? errors.sliderLogo
                          : ''
                      }
                    />
                    <Label
                      value={values.smallLogo}
                      text={'Small Logo - this field is optional'}
                      name={'smallLogo'}
                      type={'text'}
                      placeholder={'you need to insert a link to the image'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.smallLogo && touched.smallLogo
                          ? errors.smallLogo
                          : ''
                      }
                    />
                    <Label
                      value={values.title}
                      text={'Game title - this field is required'}
                      name={'title'}
                      type={'text'}
                      placeholder={'It must be unique'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.title && touched.title ? errors.title : ''
                      }
                    />
                    <Label
                      value={values.sliderTitle}
                      text={'Slider title - this field is optional'}
                      name={'sliderTitle'}
                      type={'text'}
                      placeholder={'It must be unique'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.sliderTitle && touched.sliderTitle
                          ? errors.sliderTitle
                          : ''
                      }
                    />
                    <Label
                      value={values.price}
                      text={'Game price - this field is required'}
                      name={'price'}
                      type={'number'}
                      placeholder={'It must be more than 0'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.price && touched.price ? errors.price : ''
                      }
                    />
                    <Label
                      value={values.genres}
                      text={'Game Genres - this field is required'}
                      name={'genres'}
                      type={'text'}
                      placeholder={'show fantasy'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.genres && touched.genres ? errors.genres : ''
                      }
                    />
                    <TextArea
                      value={values.sliderDescription}
                      text={'Slider Description - this field is optional'}
                      name={'sliderDescription'}
                      placeholder={'show fantasy'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.sliderDescription && touched.sliderDescription
                          ? errors.sliderDescription
                          : ''
                      }
                    />
                    <TextArea
                      value={values.gamePageDescription}
                      text={'Game Page Description - this field is required'}
                      name={'gamePageDescription'}
                      placeholder={'show fantasy'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.gamePageDescription &&
                        touched.gamePageDescription
                          ? errors.gamePageDescription
                          : ''
                      }
                    />

                    <Label
                      value={values.videoLink}
                      text={'Video Link - this field is required'}
                      name={'videoLink'}
                      type={'text'}
                      placeholder={
                        'This should be a link to the video (YouTube or other secure services)'
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.videoLink && touched.videoLink
                          ? errors.videoLink
                          : ''
                      }
                    />

                    <Label
                      value={values.iframeVideo}
                      text={'Iframe Video - this field is required'}
                      name={'iframeVideo'}
                      type={'text'}
                      placeholder={
                        'This should be a link to the video (YouTube or other secure services)'
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.iframeVideo && touched.iframeVideo
                          ? errors.iframeVideo
                          : ''
                      }
                    />
                    <div className={styles.selectBlock}>
                      <label className={styles.labelSelect}>
                        <span className={styles.selectTitile}>
                          Choose a category
                        </span>
                        <select
                          name='category'
                          multiple
                          onChange={handleChange}
                          className={styles.select}
                          value={values.category}
                        >
                          {category.map((category: Category) => (
                            <option
                              className={styles.option}
                              key={`option - ${category.id}`}
                              value={category.id}
                            >
                              {category.title}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <button
                      type='submit'
                      className={styles.formBtn}
                      disabled={isSubmitting}
                    >
                      Add Game
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
};

export default AdminPage;
